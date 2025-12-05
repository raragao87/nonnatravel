import type { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Globe, Heart, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'At NonnaTravel, we design unforgettable journeys that reconnect you with your origins. We are an American-European travel company founded by a multicultural team.',
  openGraph: {
    title: 'About Us - Nonna Travel',
    description: 'Learn about NonnaTravel and our mission to bring people home to the Italy of their grandparents.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-green/80 text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl">
            Bringing people home to the Italy of their grandparents.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                At NonnaTravel, we design unforgettable journeys that reconnect you with your origins. 
                These are intimate, tailor-made visits to the villages where your grandparents (Nonni) once lived.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                Each experience opens a window into your family's story, blending discovery and emotion 
                through authentic encounters: cooking with local grandmothers (Nonne), tasting regional wines, 
                and exploring artisanal traditions passed down through generations.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                Your dedicated English-speaking guide will lead you through your ancestral village, walking 
                the same streets your grandparents once did and uncovering how they lived, ate, and worked. 
                Upon request, we can even help arrange a special meeting with distant relatives who still call 
                that place home.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border-l-4 border-primary-green">
              <div className="flex items-start">
                <Globe className="text-primary-green mr-4 flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-text-primary">
                    Our Mission
                  </h3>
                  <p className="text-lg text-text-primary leading-relaxed">
                    We are an American-European travel company founded by a multicultural team living across 
                    the United States, Italy, the Netherlands, and Brazil. We are united by one passion: 
                    bringing people home to the Italy of their grandparents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary-green/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-green" size={40} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Authentic Experiences</h3>
              <p className="text-text-primary/80">
                Real connections with local communities and traditions, not tourist traps.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-green" size={40} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Multicultural Team</h3>
              <p className="text-text-primary/80">
                We understand both American and European perspectives on heritage travel.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-green/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary-green" size={40} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Personalized Journeys</h3>
              <p className="text-text-primary/80">
                Every trip is tailor-made based on your family's unique story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Discover Your Heritage?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let us help you plan your journey back to your roots.
          </p>
          <Button href="/contact" variant="secondary" className="text-lg px-8 py-4">
            Get Instant Quote
          </Button>
        </div>
      </section>
    </div>
  );
}

