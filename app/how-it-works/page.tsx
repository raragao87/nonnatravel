import type { Metadata } from 'next';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Quote, MapPin, Users, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how NonnaTravel helps you discover your Italian roots. From telling us your surname to enjoying an authentic Italian day you will never forget.',
  openGraph: {
    title: 'How It Works - Nonna Travel',
    description: 'Learn how NonnaTravel helps you discover your Italian roots.',
  },
};

const steps = [
  {
    number: '1',
    icon: Quote,
    title: "Tell us your surname or your grandparents' village",
    description: "Start with whatever you know — a name, a town, a region, even just a story. That is enough for us to begin.",
  },
  {
    number: '2',
    icon: MapPin,
    title: 'We match you with the right village',
    description: 'We identify the Italian village most connected to your roots. If you already know it, we plan your day directly.',
  },
  {
    number: '3',
    icon: Users,
    title: 'Visit your ancestral village with a private guide',
    description: 'Walk the same streets your grandparents once walked. Learn how they lived, what they ate, and what their daily life was like.',
  },
  {
    number: '4',
    icon: Heart,
    title: 'Enjoy an authentic Italian day you will never forget',
    description: 'Have a homemade-style lunch. Taste local wine. Meet warm locals. Enjoy a classic Italian coffee break. You can also add special experiences like cooking with a Nonna.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-green/80 text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl">
            Your journey to rediscover your Italian roots in four simple steps.
          </p>
        </div>
      </section>

      {/* Timeline - Mobile (Vertical) */}
      <section className="py-16 md:py-24 bg-white md:hidden">
        <div className="container-custom">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="relative z-10">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="bg-primary-green text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <Icon className="text-primary-green mr-2" size={24} />
                          <h3 className="text-xl font-heading font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-text-primary/80">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-primary-green/30 z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline - Desktop (Horizontal) */}
      <section className="py-16 md:py-24 bg-white hidden md:block">
        <div className="container-custom">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-primary-green/30 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="text-center relative">
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary-green text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl relative z-10">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex justify-center mb-4">
                      <Icon className="text-primary-green" size={32} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                    <p className="text-text-primary/80">{step.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-text-primary/80">
            Get an instant quote and begin planning your heritage travel experience.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Get Instant Quote
          </Button>
        </div>
      </section>
    </div>
  );
}

