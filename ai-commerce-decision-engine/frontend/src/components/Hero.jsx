import React from 'react';

export default function Hero() {
  return (
    <section className="mb-8 animate-fade-in opacity-0">
      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-200/50 dark:bg-gray-800/40 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
          Sample data — live agents coming soon
        </span>
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl animate-pulsing-glow">
        Business Intelligence, <span className="bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-300 bg-clip-text text-transparent">Automated</span>
      </h2>
      <p className="mt-2 text-base text-gray-500 dark:text-gray-400 max-w-2xl">
        Real-time execution stats, multi-agent pricing orchestration, and supply chain decisions unified in a single intelligence interface.
      </p>
    </section>
  );
}
