import React from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Tag, 
  Truck, 
  Briefcase, 
  BrainCircuit
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'demand', name: 'Demand Agent', icon: TrendingUp },
    { id: 'pricing', name: 'Pricing Agent', icon: Tag },
    { id: 'logistics', name: 'Logistics Agent', icon: Truck },
    { id: 'finance', name: 'Finance Agent', icon: Briefcase },
    { id: 'ceo', name: 'CEO Agent', icon: BrainCircuit },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0d0d15] flex flex-col h-full transition-colors duration-300">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold">
            AE
          </div>
          <div>
            <h2 className="font-semibold text-sm leading-tight text-gray-900 dark:text-white">Decision Engine</h2>
            <span className="text-xs text-gray-500 dark:text-gray-400">Enterprise v1.0</span>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border-l-4 border-teal-600'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-gray-500 dark:text-gray-400'}`} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
