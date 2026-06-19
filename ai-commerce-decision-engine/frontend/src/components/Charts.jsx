import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 2000, revenue: 9800 },
  { month: 'Apr', sales: 2780, revenue: 3908 },
  { month: 'May', sales: 1890, revenue: 4800 },
  { month: 'Jun', sales: 2390, revenue: 3800 },
  { month: 'Jul', sales: 3490, revenue: 4300 },
];

const productData = [
  { name: 'Phones', demand: 120 },
  { name: 'Laptops', demand: 85 },
  { name: 'Watches', demand: 65 },
  { name: 'Audio', demand: 90 },
  { name: 'Monitors', demand: 45 },
];

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="p-6 bg-white dark:bg-[#0d0d15] border border-gray-200 dark:border-gray-800 rounded-xl transition-colors duration-300">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Sales Trend
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={11} tickLine={false} />
              <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 15, 25, 0.95)',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="var(--chart-primary)"
                strokeWidth={3}
                dot={{ stroke: 'var(--chart-primary)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="var(--chart-secondary)" 
                strokeWidth={2} 
                dot={{ stroke: 'var(--chart-secondary)', strokeWidth: 1, r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-[#0d0d15] border border-gray-200 dark:border-gray-800 rounded-xl transition-colors duration-300">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          Demand by Product
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
              <XAxis dataKey="name" stroke="#9CA3AF" fontSize={11} tickLine={false} />
              <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(15, 15, 25, 0.95)',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="demand" fill="var(--chart-primary)" radius={[6, 6, 0, 0]}>
                {productData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? 'var(--chart-primary)' : 'var(--chart-secondary)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
