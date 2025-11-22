'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  initialOpen?: number; // Index of initially open item, -1 for none
}

export function FAQAccordion({
  items,
  title = "Frequently asked questions",
  subtitle,
  initialOpen = 0
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(initialOpen);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl lg:text-3xl font-bold text-[#2C3333] mb-4 text-center">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-[#5F6368] text-center mb-8">{subtitle}</p>
      )}

      <div className="space-y-3">
        {items.map((faq, index) => (
          <div
            key={index}
            className="bg-[#FAF9F6] rounded-xl border border-[#EAE7DC] overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#EAE7DC]/50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-[#2C3333] pr-4">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#5F6368] flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-4 pt-0">
                <p className="text-[#5F6368] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Compact version for sidebars or smaller spaces
export function FAQAccordionCompact({
  items,
  initialOpen = -1
}: {
  items: FAQItem[];
  initialOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number>(initialOpen);

  return (
    <div className="space-y-2">
      {items.map((faq, index) => (
        <div
          key={index}
          className="border-b border-[#EAE7DC] last:border-0"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full py-3 flex items-center justify-between text-left"
          >
            <span className="font-medium text-[#2C3333] text-sm pr-4">{faq.q}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#5F6368] flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === index ? 'max-h-64 pb-3' : 'max-h-0'
            }`}
          >
            <p className="text-[#5F6368] text-sm">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
