import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    question: "What counts as a 'normal working day'?",
    answer: "It's determined from your historical work pattern on the same weekday before the public holiday, using your selected benchmark. For example, if the public holiday falls on a Monday, we look at the employee's work pattern on previous Mondays to determine if they normally work that day."
  },
  {
    question: "Which benchmark should I choose?",
    answer: "Many employers start with 4 of the last 8 matching weekdays; adjust to your policy and risk tolerance. Conservative approaches might use 6 of 8, while more flexible policies might use 4 of 10. The key is consistency with your existing leave policies."
  },
  {
    question: "What file do I upload?",
    answer: "Export a CSV of employee timecards covering at least 6–8 weeks before the holiday. Include employee names/IDs, dates, and hours worked. Most payroll systems can export this data directly."
  },
  {
    question: "Is this legal advice?",
    answer: "No—operational guidance only. Get legal advice if needed. We provide data analysis based on your chosen criteria, but interpretation of employment law should always be confirmed with qualified legal counsel."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Common Questions
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about normal working day calculations and our service
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-50 to-white p-6 border-b border-slate-100">
              <div className="flex items-center justify-center">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-600">Quick answers to help you get started</span>
                </div>
              </div>
            </div>

            <div className="px-8 py-4">
              <Accordion items={faqItems} />
            </div>

            <div className="bg-slate-50/50 p-6 border-t border-slate-100">
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-4">
                  Still have questions? We&apos;re here to help.
                </p>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact our team
                </button>
              </div>
            </div>
          </div>

          {/* Additional help section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Need more guidance?
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Our team can provide detailed consultation on employment law compliance and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Ready to start?
                  </h3>
                  <p className="text-green-700 text-sm">
                    Upload your timecard data and get results in minutes. Simple, fast, and accurate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};