import React from 'react';
import { Card } from '@/components/ui/Card';

const benefits = [
  {
    title: 'Pay day-in-lieu only to staff who qualify',
    description: 'Eliminate overpayments by accurately identifying eligible employees based on actual work patterns.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
  {
    title: 'Cut manual eligibility checks from hours to minutes',
    description: 'Automate complex calculations that would otherwise require manual review of individual timesheets.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Reduce double-costing when backfilling leave days',
    description: 'Avoid unnecessary expenses by ensuring accurate eligibility before approving alternative days.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Proven Results
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Outcome & Value
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transform your holiday pay process with accurate, automated calculations that save time and money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-green-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    {benefit.icon}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight">
                    {benefit.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* ROI Section */}
          <div className="relative">
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />

              <div className="relative z-10 text-center">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">Quick ROI</h3>

                <p className="text-slate-200 leading-relaxed max-w-2xl mx-auto">
                  <strong className="text-white">ROI hint:</strong> A single avoided unnecessary ALT day can cover the service cost at typical hourly rates.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">Minutes</div>
                      <div className="text-sm text-slate-300">vs hours of manual work</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">$$$</div>
                      <div className="text-sm text-slate-300">Immediate cost savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">100%</div>
                      <div className="text-sm text-slate-300">Accurate calculations</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};