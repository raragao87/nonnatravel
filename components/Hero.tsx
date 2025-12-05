import React from 'react';
import { Button } from './Button';

interface HeroProps {
  headline: string;
  subheadline: string;
  supportingLine?: string;
  ctaText: string;
  ctaHref: string;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  supportingLine,
  ctaText,
  ctaHref,
}) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-green to-primary-green/80 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/95">
            {subheadline}
          </p>
          {supportingLine && (
            <p className="text-lg md:text-xl mb-8 text-white/90">
              {supportingLine}
            </p>
          )}
          <Button href={ctaHref} variant="secondary" className="text-lg px-8 py-4">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

