import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricCards from './components/MetricCards';
import Charts from './components/Charts';
import { Play, Send, CheckCircle, Clock } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-darkBg text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50/50 dark:bg-darkBg/50 transition-colors duration-300">
          {activeTab === 'dashboard' && (
            <>
              <Hero />
              <MetricCards />
              <Charts />
              <RecentActivity />
            </>
          )}
          {activeTab !== 'dashboard' && (
            <AgentView agentId={activeTab} />
          )}
        </main>
      </div>
    </div>
  );
}

function RecentActivity() {
  const activities = [
    { text: "Pricing Agent optimized product prices for Q3", time: "10 mins ago", status: "success" },
    { text: "Logistics Agent rerouted Shipment #4928 to avoid delays", time: "1 hour ago", status: "success" },
    { text: "Demand Agent flagged low inventory warning for Audio Accessories", time: "3 hours ago", status: "warning" },
  ];

  return (
    <div className="p-6 bg-white dark:bg-[#0d0d15] border border-gray-200 dark:border-gray-800 rounded-xl transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Autonomous Agent Activity</h3>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-200/50 dark:bg-gray-800/40 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
          Demo activity feed
        </span>
      </div>
      <div className="space-y-4">
        {activities.map((act, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${act.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{act.text}</p>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500">{act.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgentView({ agentId }) {
  const agentDetails = {
    demand: {
      name: "Demand Forecasting Agent",
      desc: "Autonomously monitors search trends, competitor catalogs, and inventory levels to predict SKU-level weekly velocity.",
      color: "from-blue-500 to-teal-600",
      actions: ["Generate Forecast Report", "Sync Market Signals", "Optimize Buffer Inventory"],
      logs: [
        "Retrieved local catalog snapshot (3,400 products)",
        "Aggregated external pricing data (12 competitors)",
        "Velocity forecasts calculated for next 4 cycles (Confidence: 94%)",
      ]
    },
    pricing: {
      name: "Dynamic Pricing Agent",
      desc: "Optimizes price elasticity in real-time, matching competitive moves and inventory levels to maximize margin dollars.",
      color: "from-amber-500 to-teal-600",
      actions: ["Trigger Repricing Cycle", "Review Elasticity Model", "Set Markdown Boundaries"],
      logs: [
        "Identified competitor discount on 'Smartphone X' (-5%)",
        "Assessed local elasticity margin matrix",
        "Applied optimal -3.2% discount target matching target velocity",
      ]
    },
    logistics: {
      name: "Logistics & Supply Chain Agent",
      desc: "Automates carrier routing, tracks shipments, and orchestrates transfer orders across 3 distribution hubs.",
      color: "from-sky-500 to-teal-600",
      actions: ["Re-route Delayed Shipments", "Analyze Carrier Performance", "Simulate Fuel Surcharge Risk"],
      logs: [
        "Identified severe weather bottleneck on Route US-90",
        "Recalculated logistics model; switched carrier to FedEx Ground Express",
        "Estimated savings: $1,240, Estimated delay reduction: 14 hrs",
      ]
    },
    finance: {
      name: "Finance & Working Capital Agent",
      desc: "Predicts cash flow runways, optimizes invoice payment schedules, and tracks real-time operating expense burn.",
      color: "from-emerald-500 to-teal-600",
      actions: ["Run Cash Flow Forecast", "Analyze Opex Variance", "Request Capital Allocation Approval"],
      logs: [
        "Scanned current accounts payable ledger ($45,200 due 10 days)",
        "Runway projection: 18 months based on average Q2 velocity",
        "Recommended payout delays on net-60 terms to optimize capital yield",
      ]
    },
    ceo: {
      name: "CEO Executive Agent",
      desc: "Strategic autonomous general agent coordinating all underlying sub-agents. Formulates quarterly targets and triggers alerts.",
      color: "from-amber-500 to-teal-600",
      actions: ["Instruct Sub-Agents", "Trigger Scenario Analysis", "Review Executive Audit Trails"],
      logs: [
        "Analyzed overall system health: Operating nominal",
        "Assessed goal achievement: 98.4% of weekly gross sales budget met",
        "Initiated backup policy check for pricing deviations",
      ]
    }
  };

  const agent = agentDetails[agentId] || agentDetails.ceo;

  return (
    <div className="animate-fade-in opacity-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${agent.color}`} />
            {agent.name}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 max-w-2xl">{agent.desc}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
            <CheckCircle className="h-3.5 w-3.5" />
            Active & Running
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 p-6 bg-white dark:bg-[#0d0d15] border border-gray-200 dark:border-gray-800 rounded-xl">
          <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Command Terminal</h3>
          <div className="font-mono text-xs bg-gray-950 text-gray-300 p-4 rounded-xl space-y-2 border border-gray-800 max-h-60 overflow-y-auto">
            {agent.logs.map((log, index) => (
              <div key={index} className="flex gap-2">
                <span className="text-teal-400">[$]</span>
                <span>{log}</span>
              </div>
            ))}
            <div className="flex gap-2 text-emerald-400 animate-pulse">
              <span>[$]</span>
              <span>Awaiting input or event triggers...</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <input 
              type="text" 
              placeholder="Send instruction payload to agent..." 
              className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 dark:text-white" 
            />
            <button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl px-4 py-2 flex items-center justify-center">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-[#0d0d15] border border-gray-200 dark:border-gray-800 rounded-xl flex flex-col justify-between">
          <div>
            <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4">Available Actions</h3>
            <div className="space-y-2">
              {agent.actions.map((act, index) => (
                <button
                  key={index}
                  className="w-full text-left flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-900 hover:bg-teal-50 dark:hover:bg-teal-950/20 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 border border-gray-200 dark:border-gray-800 hover:border-teal-200 dark:hover:border-teal-900 rounded-xl text-xs font-semibold transition-all duration-200"
                >
                  <span>{act}</span>
                  <Play className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <Clock className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-400">Last Sync Cycle</p>
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 font-sans">Just now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
