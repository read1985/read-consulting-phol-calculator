import React from 'react';
import { Card } from '@/components/ui/Card';

const steps = [
  {
    number: '1',
    title: 'Upload 6–8 weeks of timecards (CSV)',
    description: 'CSV exports from your payroll/timeclock system work best.',
  },
  {
    number: '2',
    title: 'Pick the public holiday date',
    description: 'Select the specific public holiday you need to calculate eligibility for.',
  },
  {
    number: '3',
    title: 'Set your benchmark rule',
    description: 'e.g., worked ≥ 4 of the last 8 matching weekdays → qualifies as a normal working day. You choose the benchmark (e.g., 4 of the last 8 matching weekdays). We do the counting.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Three simple steps to calculate day-in-lieu eligibility
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.number} className="text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-lg mx-auto">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              The rule is configurable (4/6, 4/8, 8/10, etc.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};