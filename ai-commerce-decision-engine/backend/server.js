import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from 'express';

import { runDemandAgent } from "./demandAgent.js";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Test route
app.get('/api/health', (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/agents/demand", async (req, res) => {
  try {
    const { productName, salesHistory } = req.body;
    const result = await runDemandAgent(productName, salesHistory);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
