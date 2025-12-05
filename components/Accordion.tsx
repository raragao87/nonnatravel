'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary-green"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="font-semibold text-text-primary pr-4">{item.question}</span>
            <ChevronDown
              className={`flex-shrink-0 transition-transform ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              size={20}
            />
          </button>
          {openIndex === index && (
            <div
              id={`accordion-content-${index}`}
              className="px-6 py-4 bg-gray-50 text-text-primary"
            >
              <p className="whitespace-pre-line">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

