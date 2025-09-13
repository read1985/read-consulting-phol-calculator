import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Read Consulting</h3>
            <p className="text-slate-300 max-w-md">
              Expert employment and payroll consulting services for New Zealand employers.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-300">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hello@readconsulting.co.nz" className="text-slate-400 hover:text-white transition-colors">
                  hello@readconsulting.co.nz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Read Consulting. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">
              Professional services for NZ employers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};