'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const handleStartCalculator = () => {
    window.open('#', '_blank');
  };

  const handleTalkToConsulting = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Stop over-paying day-in-lieu on public holidays.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Determine normal working day eligibility from actual rosters and timesheets—fast.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              onClick={handleStartCalculator}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800"
            >
              Start the calculator
            </Button>
            <Button
              onClick={handleTalkToConsulting}
              variant="secondary"
              size="lg"
            >
              Talk to Read Consulting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};