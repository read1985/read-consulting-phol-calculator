import React from 'react';
import { Card } from '@/components/ui/Card';

const benefits = [
  'Pay day-in-lieu only to staff who qualify.',
  'Cut manual eligibility checks from hours to minutes.',
  'Reduce double-costing when backfilling leave days.',
];

export const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
              Outcome & Value
            </h2>
          </div>

          <Card className="mb-12">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="text-center">
            <p className="text-sm text-slate-600 bg-slate-50 rounded-lg p-4 inline-block">
              <strong>ROI hint:</strong> A single avoided unnecessary ALT day can cover the service cost at typical hourly rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};