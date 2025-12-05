import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'NonnaTravel Terms & Conditions - Read our terms of service for booking heritage travel experiences.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Terms & Conditions</h1>
          <p className="text-text-primary/80 mb-8">Effective Date: [Insert Date]</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-text-primary">
            <p>
              These Terms and Conditions ("Terms") govern your use of the NonnaTravel website and Services 
              provided by NonnaTravel LLC ("NonnaTravel," "we," "us," or "our"). By booking a trip, using our 
              website, or interacting with our Services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"Services":</strong> All travel planning, bookings, experiences, transportation, guided tours, website tools, and customer support provided by NonnaTravel.</li>
              <li><strong>"Traveler," "you," "your":</strong> Any individual using the Services or purchasing a NonnaTravel experience.</li>
              <li><strong>"Experience":</strong> Any trip, tour, or add-on you book through NonnaTravel.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. Eligibility</h2>
            <p>You must be at least 18 years old to book an Experience. By using our Services, you represent 
            that all information you provide is accurate and truthful.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Nature of Our Services</h2>
            <p>NonnaTravel acts as a travel organizer providing curated experiences and an intermediary between 
            you and local guides, drivers, restaurants, and partners. We do not own or operate transportation 
            companies, restaurants, or local venues. We select partners carefully but are not responsible for 
            their acts, errors, omissions, negligence, or failure to perform.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">4. Pricing and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prices are listed in U.S. Dollars (USD).</li>
              <li>Payment must be made in full at the time of booking unless otherwise stated.</li>
              <li>Payments are processed securely through third-party processors (e.g., Stripe).</li>
              <li>NonnaTravel is not responsible for bank fees, exchange rate differences, or card issuer charges.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">5. Cancellations and Refunds</h2>
            <p>See our full <a href="/refund" className="text-primary-green hover:underline">Refund & Cancellation Policy</a>. 
            By booking, you agree to those terms.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">6. Travel Risks</h2>
            <p>By participating in an Experience, you acknowledge that travel involves inherent risk. Rural villages 
            may have uneven terrain or limited facilities. NonnaTravel is not liable for injuries, accidents, loss, or 
            theft except where prohibited by law. We strongly recommend personal travel insurance.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">7. Contact Information</h2>
            <p>
              <strong>NonnaTravel LLC</strong><br />
              Email: <a href="mailto:hello@nonnatravel.com" className="text-primary-green hover:underline">hello@nonnatravel.com</a><br />
              Phone: <a href="tel:+13479935093" className="text-primary-green hover:underline">+1 (347) 993-5093</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

