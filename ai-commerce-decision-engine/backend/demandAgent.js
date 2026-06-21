import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function runDemandAgent(productName, salesHistory) {

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
You are a Demand Forecasting Agent for an e-commerce company.

Product: ${productName}
Past sales data (units sold per week): ${JSON.stringify(salesHistory)}

Analyze this trend and respond ONLY in this exact JSON format, with no 
extra text before or after:

{
  "predictedNextWeekDemand": <number>,
  "trend": "<increasing | decreasing | stable>",
  "percentageChange": "<+/-X%>",
  "reasoning": "<one short sentence explaining why>",
  "recommendation": "<one short actionable suggestion for inventory>"
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const cleaned = text.replace(/```json|```/g, "").trim();

    try {
        return JSON.parse(cleaned);
    } catch (error) {
        return { error: "Could not parse agent response", raw: text };
    }
}