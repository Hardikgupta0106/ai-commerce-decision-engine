import React from 'react';
import { DollarSign, Percent, Package, Truck, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function MetricCards() {
  const metrics = [
    {
      title: 'Revenue',
      value: '$1,248,900',
      change: '+12.3%',
      isPositive: true,
      icon: DollarSign,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30',
      animateClass: 'animate-gentle-pulse',
    },
    {
      title: 'Profit Margin',
      value: '24.6%',
      change: '+1.8%',
      isPositive: true,
      icon: Percent,
      color: 'text-teal-500 bg-teal-50 dark:bg-teal-950/30',
    },
    {
      title: 'Inventory Value',
      value: '$340,250',
      change: '-3.2%',
      isPositive: false,
      icon: Package,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30',
    },
    {
      title: 'Delivery Cost',
      value: '$12,450',
      change: '-8.4%',
      isPositive: true,
      icon: Truck,
      color: 'text-sky-500 bg-sky-50 dark:bg-sky-950/30',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      {metrics.map((metric, i) => {
        const Icon = metric.icon;
        return (
          <div
            key={i}
            className="p-6 bg-white dark:bg-[#0d0d15] border border-gray-200 dark:border-gray-800 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {metric.title}
              </span>
              <div className={`p-2 rounded-lg ${metric.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${metric.animateClass || ''}`}>
                {metric.value}
              </h3>
              <div className="flex items-center gap-1 mt-2">
                {metric.isPositive ? (
                  <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-rose-500" />
                )}
                <span
                  className={`text-xs font-semibold ${
                    metric.isPositive ? 'text-emerald-500' : 'text-rose-500'
                  }`}
                >
                  {metric.change}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 ml-1">
                  vs last month
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
