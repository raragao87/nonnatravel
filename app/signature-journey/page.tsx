import type { Metadata } from 'next';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Car, Users, Clock, UtensilsCrossed, Coffee, Map } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Your Day in Your Grandparents Village',
  description: 'A private, tailor-made experience designed to reconnect you with your origins. Includes private transfer, English-speaking guide, four-hour village visit, authentic regional lunch, and more.',
  openGraph: {
    title: 'Your Day in Your Grandparents Village - Nonna Travel',
    description: 'A private, tailor-made experience designed to reconnect you with your origins.',
  },
};

const inclusions = [
  {
    icon: Car,
    title: 'Private round-trip transfer',
    description: 'From your chosen Italian city',
  },
  {
    icon: Users,
    title: 'English-speaking local guide',
    description: 'Dedicated guide for your entire experience',
  },
  {
    icon: Clock,
    title: 'Four-hour village visit',
    description: 'Comprehensive exploration of your ancestral village',
  },
  {
    icon: UtensilsCrossed,
    title: 'Authentic regional lunch',
    description: 'Traditional Italian cuisine in a local setting',
  },
  {
    icon: Coffee,
    title: 'Traditional Italian coffee break',
    description: 'Experience Italian coffee culture',
  },
  {
    icon: Map,
    title: 'Personalized route',
    description: 'Based on your surname or family memory',
  },
];

const addOns = [
  'Sleep in the village',
  'Local wine tasting',
  'Cooking with a Nonna',
  'Honorary village certificate',
  'Photo and video package',
  'Welcome Home Festival',
  'Family Connection Service',
];

export default function SignatureJourneyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-green/80 text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Your Day in Your Grandparents' Village
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl">
            A private, tailor-made experience designed to reconnect you with your origins.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((inclusion, index) => {
              const Icon = inclusion.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-green/10 p-4 rounded-full">
                      <Icon className="text-primary-green" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{inclusion.title}</h3>
                  <p className="text-text-primary/80">{inclusion.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Optional Add-ons to Personalize Your Day
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <ul className="space-y-4">
                {addOns.map((addOn, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-gold mr-3 text-xl">•</span>
                    <span className="text-text-primary text-lg">{addOn}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-text-primary/80 mb-4">
                  <strong>Family Connection Service:</strong> Optional research service for guests who want to explore potential family links in their ancestral village. This service involves local research, conversations with longtime residents, and the identification of families who share your same surname.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Placeholders */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-text-primary/60">Image: Cooking hands with local Nonna</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-text-primary/60">Image: Old Italian village streets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Experience Your Heritage?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get an instant quote and start planning your journey.
          </p>
          <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
            Get Instant Quote
          </Button>
        </div>
      </section>
    </div>
  );
}

