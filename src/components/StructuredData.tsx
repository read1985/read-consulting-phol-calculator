import React from 'react';

export const FAQStructuredData: React.FC = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What counts as a 'normal working day'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's determined from your historical work pattern on the same weekday before the public holiday, using your selected benchmark."
        }
      },
      {
        "@type": "Question",
        "name": "Which benchmark should I choose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many employers start with 4 of the last 8 matching weekdays; adjust to your policy and risk tolerance."
        }
      },
      {
        "@type": "Question",
        "name": "What file do I upload?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Export a CSV of employee timecards covering at least 6–8 weeks before the holiday."
        }
      },
      {
        "@type": "Question",
        "name": "Is this legal advice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No—operational guidance only. Get legal advice if needed."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
};