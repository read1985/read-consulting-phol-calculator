'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Talk to Read Consulting
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Need help with rostering strategy, leave policy interpretation, or payroll data quality? Read Consulting can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Work Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <p className="text-slate-600">
                    <a href="mailto:hello@readconsulting.co.nz" className="text-blue-600 hover:text-blue-800">
                      hello@readconsulting.co.nz
                    </a>
                  </p>
                  <p className="text-slate-600">
                    Professional services for NZ employers
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Our Expertise
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Rostering strategy and optimisation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Leave policy interpretation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Payroll data quality and analysis
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Employment law compliance
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 mb-2">Quick Response</h4>
                <p className="text-sm text-slate-600">
                  We typically respond to enquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};