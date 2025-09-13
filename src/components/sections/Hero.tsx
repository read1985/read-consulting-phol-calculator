'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const handleStartCalculator = () => {
    window.open('https://rich-n8n-c59e65f3d295.herokuapp.com/form/6de56e93-4d1d-4190-9dac-d57e0a18ff33', '_blank');
  };

  const handleTalkToConsulting = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-50 to-slate-50 opacity-50 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Trusted by NZ Employers
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
            Stop over-paying
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-700">
              day-in-lieu
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 font-normal text-slate-600">
              on public holidays
            </span>
          </h1>

          <p className="mt-8 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
            Determine normal working day eligibility from actual rosters and timesheets—fast, accurate, and compliant.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              onClick={handleStartCalculator}
              size="lg"
              className="bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 px-8 py-4 text-lg font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Start the calculator
            </Button>
            <Button
              onClick={handleTalkToConsulting}
              variant="secondary"
              size="lg"
              className="border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-8 py-4 text-lg font-semibold transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Talk to Read Consulting
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Trusted by employers across industries</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs text-slate-400 font-medium">RETAIL</div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="text-xs text-slate-400 font-medium">HEALTHCARE</div>
              <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
              <div className="text-xs text-slate-400 font-medium">HOSPITALITY</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};