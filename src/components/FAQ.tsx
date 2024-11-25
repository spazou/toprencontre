import React from 'react';

interface FAQProps {
  questions: Array<{ question: string; answer: string }>;
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

export function FAQ({ questions, openFaq, setOpenFaq }: FAQProps) {
  return (
    <div className="mb-12">
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              {faq.question}
              <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openFaq === index && (
              <div className="px-6 py-4 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}