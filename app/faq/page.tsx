import type { Metadata } from 'next';
import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about NonnaTravel heritage journeys to Italian villages. Learn about booking, cancellations, dietary restrictions, and more.',
  openGraph: {
    title: 'FAQ - Nonna Travel',
    description: 'Find answers to common questions about NonnaTravel heritage journeys.',
  },
};

const faqItems = [
  {
    question: 'Do I need family documents to book?',
    answer: 'No. A surname or a village name is enough for us to create your experience. We will always do our best to bring you as close as possible to your family story. After booking, our travel designer may reach out with optional questions to personalize your day even more.',
  },
  {
    question: 'What if I am not sure of the exact village?',
    answer: 'No problem at all. We match your surname with the Italian region and village where it is historically most common. If you only know a story, a region, or a name your Nonna used to mention, we can begin from there.',
  },
  {
    question: 'Is the experience private?',
    answer: 'Yes. Every NonnaTravel journey is fully private — your own driver, your own guide, and a day built entirely around your family.',
  },
  {
    question: 'Can I bring my parents or children?',
    answer: 'Absolutely. Many families travel together to reconnect with their roots. You can add as many travelers as you like. Since the main cost is the private organization and guide, each additional guest comes with only a small extra fee.',
  },
  {
    question: 'How early should I book?',
    answer: 'We recommend booking at least one month in advance to secure your guide, restaurant, and local arrangements. The earlier you book, the more flexibility we have to design the best and most affordable itinerary for your day.',
  },
  {
    question: 'Can I cancel or reschedule?',
    answer: 'You can cancel up to 3 months before your scheduled date for a full refund. You may reschedule once, up to 1 month before your date, at no additional cost. After these deadlines, local partners are confirmed and costs cannot be recovered.',
  },
  {
    question: 'Is this experience suitable for seniors or travelers with limited mobility?',
    answer: 'Yes. Most villages are walkable and the pace is gentle. If anyone has mobility needs, let us know when you are booking the journey — we adapt the itinerary, restaurant, and transportation to ensure comfort and safety for everyone.',
  },
  {
    question: 'What happens if the weather is bad?',
    answer: 'Your day is private, so we can adjust timing and indoor stops to keep the visit enjoyable. Light rain does not stop the experience. In case of severe weather, we will coordinate alternative arrangements.',
  },
  {
    question: 'Are meals suitable for dietary restrictions?',
    answer: 'Yes. Italian cuisine is flexible. Whether you are vegetarian, gluten-free, or have allergies, our partners can adjust the menu. Please notify us at least 2 weeks in advance.',
  },
  {
    question: 'What language does the guide speak?',
    answer: 'All our guides speak English and Italian fluently. Many also speak additional languages upon request.',
  },
  {
    question: 'How long is the experience?',
    answer: 'Your day typically lasts six to eight hours, depending on your starting city and the location of the village. We coordinate all timing so you can relax and enjoy your visit.',
  },
  {
    question: 'What is the transportation like?',
    answer: 'You will travel in a private, licensed car or van with a professional driver. All vehicles meet Italian safety standards and are air-conditioned.',
  },
  {
    question: 'Can I stay overnight in the village?',
    answer: 'Yes. Many villages offer charming agriturismi, B&Bs, or boutique stays. Let us know and we will check availability and assist with arrangements.',
  },
  {
    question: 'Can you help me find living relatives?',
    answer: 'Yes. We offer an optional "Family Connection Service" for guests who want to explore potential family links in their ancestral village. This service involves local research, conversations with longtime residents, and the identification of families who share your same surname or belong to historical branches of the name in that area. Because this work requires time and specialized local knowledge, an additional fee applies.',
  },
  {
    question: 'What should I wear or bring?',
    answer: 'Wear comfortable shoes and seasonal clothing. Bring water, sunscreen in summer, and a light jacket in cooler months. We will provide more specific suggestions based on your village or region.',
  },
  {
    question: 'What if I have trouble finding my driver or guide?',
    answer: 'You will receive your driver\'s contact information and clear meeting instructions in advance. Our team is available via WhatsApp throughout the day if you need assistance.',
  },
  {
    question: 'Is tipping expected?',
    answer: 'Tipping is not required in Italy but is always appreciated. If you enjoyed your experience, a tip for your guide or driver is a kind gesture.',
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-green/80 text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl">
            Find answers to common questions about your heritage journey.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-text-primary/80">
            Contact us directly and we'll be happy to help.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}

