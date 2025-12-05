import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Quote, Users, MapPin, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
  description: 'NonnaTravel creates intimate, tailor-made journeys to the Italian villages of your grandparents. Cook with local Nonne, taste regional wines, and explore traditions that shaped your family\'s story.',
  openGraph: {
    title: 'Nonna Travel - Heritage Travel to Italian Villages',
    description: 'Visit the Italian village of your grandparents with a private guide and an authentic local experience.',
  },
};

const testimonials = [
  {
    quote: "It felt like the whole village knew our name. I cried three times. Best day in Italy.",
    author: "Maria R.",
    location: "New York",
  },
  {
    quote: "Walking in my Nonna's footsteps was emotional and unforgettable.",
    author: "Anthony D.",
    location: "Boston",
  },
  {
    quote: "Cooking with a local Nonna reminded me of Sundays at home. Wonderful experience.",
    author: "Sofia L.",
    location: "Chicago",
  },
];

const howItWorksSteps = [
  {
    icon: Quote,
    title: "Tell us your surname or village",
    description: "Start with whatever you know — a name, a town, a region, even just a story.",
  },
  {
    icon: MapPin,
    title: "We match you with the right village",
    description: "We identify the Italian village most connected to your roots.",
  },
  {
    icon: Heart,
    title: "Visit with a private guide",
    description: "Walk the same streets your grandparents once walked.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Homepage Blurb */}
      <section className="bg-background py-12">
        <div className="container-custom">
          <p className="text-lg md:text-xl text-center text-text-primary max-w-3xl mx-auto">
            NonnaTravel creates intimate, tailor-made journeys to the Italian villages of your grandparents. 
            Cook with local Nonne, taste regional wines, and explore traditions that shaped your family's story. 
            Your English-speaking guide makes every step simple, authentic, and memorable.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <Hero
        headline="Travel like your Nonna always dreamed"
        subheadline="Visit the Italian village of your grandparents with a private guide and an authentic local experience."
        supportingLine="Unforgettable journeys to your grandparents' village. Authentic food, real stories, and the warmth of Italy."
        ctaText="Start Your Journey"
        ctaHref="/contact"
      />

      {/* How It Works Teaser */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-green/10 p-4 rounded-full">
                      <Icon className="text-primary-green" size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{step.title}</h3>
                  <p className="text-text-primary/80">{step.description}</p>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button href="/how-it-works" variant="primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <Quote className="text-primary-green/20 absolute top-4 left-4" size={40} />
                <p className="text-text-primary italic mb-4 mt-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <Users className="text-primary-green mr-2" size={20} />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-text-primary/60">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Discover Your Roots?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get an instant quote and start planning your journey to your grandparents' village.
          </p>
          <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
            Get Instant Quote
          </Button>
        </div>
      </section>
    </>
  );
}

