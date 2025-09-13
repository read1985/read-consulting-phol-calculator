import React from 'react';
import { Card } from '@/components/ui/Card';

export const LegalAndResults: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Legal Notice */}
          <Card className="mb-16 bg-amber-50 border-amber-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-transparent" />
            <div className="relative z-10 text-center">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Legal & Assurance Note
              </h3>
              <p className="text-amber-800 leading-relaxed max-w-2xl mx-auto">
                Guidance is operational, not legal advice. We base eligibility on your chosen benchmark and your timecard data.
              </p>
            </div>
          </Card>

          {/* Results Preview */}
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Sample Output
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
              Results Preview
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See exactly what you&apos;ll receive after processing your data—clear, actionable results delivered to your inbox.
            </p>
          </div>

          <Card className="mb-12 overflow-hidden border-0 shadow-xl">
            <div className="bg-gradient-to-r from-slate-50 to-white p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">Employee Eligibility Report</h3>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    ✓ Processing Complete
                  </span>
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50/50">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold text-slate-900 text-sm">Employee</th>
                    <th className="py-4 px-6 text-left font-semibold text-slate-900 text-sm">Days Worked (in window)</th>
                    <th className="py-4 px-6 text-left font-semibold text-slate-900 text-sm hidden md:table-cell">Qualifying Dates</th>
                    <th className="py-4 px-6 text-center font-semibold text-slate-900 text-sm">Eligible</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-medium mr-3">
                          JS
                        </div>
                        <span className="font-medium text-slate-900">Smith, J.</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-700">
                      <div className="flex items-center">
                        <span className="font-semibold text-green-600">6 of 8</span>
                        <div className="ml-2 w-16 bg-slate-200 rounded-full h-2">
                          <div className="w-3/4 bg-green-500 h-2 rounded-full"></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-sm hidden md:table-cell">Mon 1/4, 8/4, 15/4, 22/4, 29/4, 6/5</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Yes
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-medium mr-3">
                          AB
                        </div>
                        <span className="font-medium text-slate-900">Brown, A.</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-700">
                      <div className="flex items-center">
                        <span className="font-semibold text-red-600">3 of 8</span>
                        <div className="ml-2 w-16 bg-slate-200 rounded-full h-2">
                          <div className="w-1/3 bg-red-500 h-2 rounded-full"></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-sm hidden md:table-cell">Mon 15/4, 29/4, 6/5</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        No
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-medium mr-3">
                          MW
                        </div>
                        <span className="font-medium text-slate-900">Wilson, M.</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-700">
                      <div className="flex items-center">
                        <span className="font-semibold text-green-600">5 of 8</span>
                        <div className="ml-2 w-16 bg-slate-200 rounded-full h-2">
                          <div className="w-5/8 bg-green-500 h-2 rounded-full"></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-sm hidden md:table-cell">Mon 1/4, 8/4, 22/4, 29/4, 6/5</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Yes
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50/50 px-6 py-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-slate-600">
                  <span>📧 Downloadable CSV report emailed to the requester</span>
                </div>
                <div className="text-sm text-slate-500">
                  3 employees processed
                </div>
              </div>
            </div>
          </Card>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-lg text-slate-600 mb-8">
              Trusted by NZ employers across industries
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2 bg-slate-100 rounded-lg px-4 py-2">
                <div className="w-8 h-8 bg-slate-300 rounded"></div>
                <span className="text-sm text-slate-500 font-medium">RETAIL</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-100 rounded-lg px-4 py-2">
                <div className="w-8 h-8 bg-slate-300 rounded"></div>
                <span className="text-sm text-slate-500 font-medium">HEALTHCARE</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-100 rounded-lg px-4 py-2">
                <div className="w-8 h-8 bg-slate-300 rounded"></div>
                <span className="text-sm text-slate-500 font-medium">HOSPITALITY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};