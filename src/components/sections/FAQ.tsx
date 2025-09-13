import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    question: "What counts as a 'normal working day'?",
    answer: "It's determined from your historical work pattern on the same weekday before the public holiday, using your selected benchmark."
  },
  {
    question: "Which benchmark should I choose?",
    answer: "Many employers start with 4 of the last 8 matching weekdays; adjust to your policy and risk tolerance."
  },
  {
    question: "What file do I upload?",
    answer: "Export a CSV of employee timecards covering at least 6–8 weeks before the holiday."
  },
  {
    question: "Is this legal advice?",
    answer: "No—operational guidance only. Get legal advice if needed."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about normal working day eligibility
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-2">
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};