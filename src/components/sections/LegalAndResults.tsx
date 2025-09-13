import React from 'react';
import { Card } from '@/components/ui/Card';

export const LegalAndResults: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Legal Notice */}
          <Card className="mb-12 bg-slate-100 border-slate-300">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Legal & Assurance Note
              </h3>
              <p className="text-slate-700">
                Guidance is operational, not legal advice. We base eligibility on your chosen benchmark and your timecard data.
              </p>
            </div>
          </Card>

          {/* Results Preview */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Results Preview
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              See exactly what you&apos;ll receive after processing your data
            </p>
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 px-4 font-semibold text-slate-900">Employee</th>
                    <th className="py-3 px-4 font-semibold text-slate-900">Days Worked (in window)</th>
                    <th className="py-3 px-4 font-semibold text-slate-900">Qualifying Dates</th>
                    <th className="py-3 px-4 font-semibold text-slate-900">Eligible</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 text-slate-700">Smith, J.</td>
                    <td className="py-3 px-4 text-slate-700">6 of 8</td>
                    <td className="py-3 px-4 text-slate-700">Mon 1/4, 8/4, 15/4, 22/4, 29/4, 6/5</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Yes</span></td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 text-slate-700">Brown, A.</td>
                    <td className="py-3 px-4 text-slate-700">3 of 8</td>
                    <td className="py-3 px-4 text-slate-700">Mon 15/4, 29/4, 6/5</td>
                    <td className="py-3 px-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">No</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-700">Wilson, M.</td>
                    <td className="py-3 px-4 text-slate-700">5 of 8</td>
                    <td className="py-3 px-4 text-slate-700">Mon 1/4, 8/4, 22/4, 29/4, 6/5</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">Yes</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Downloadable CSV report emailed to the requester with complete results
              </p>
            </div>
          </Card>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 mb-8">
              Used by NZ employers in retail, healthcare, hospitality.
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-24 h-12 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-500">
                Client Logo
              </div>
              <div className="w-24 h-12 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-500">
                Client Logo
              </div>
              <div className="w-24 h-12 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-500">
                Client Logo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};