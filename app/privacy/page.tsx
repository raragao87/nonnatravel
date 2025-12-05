import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'NonnaTravel Privacy Policy - Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Privacy Policy</h1>
          <p className="text-text-primary/80 mb-8">Effective Date: [Insert Date]</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-text-primary">
            <p>
              This Privacy Policy describes how NonnaTravel LLC ("NonnaTravel," "we," "us," or "our") 
              collects, uses, discloses, and safeguards personal information in connection with our website, 
              services, travel bookings, and related interactions (collectively, the "Services").
            </p>
            <p>
              We take your privacy seriously and are committed to handling your information responsibly 
              and in compliance with applicable U.S. federal and state privacy laws, and, where applicable, 
              the European Union General Data Protection Regulation ("GDPR").
            </p>
            <p>
              By accessing or using the Services, you acknowledge that you have read and understood this Privacy Policy.
            </p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect personal information in the following ways:</p>
            
            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">1.1 Information You Provide Directly</h3>
            <p>This includes information you voluntarily submit when requesting a quote, booking a service, 
            filling out forms, contacting us, or communicating with our team. Such information may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Surname or ancestral village (for travel personalization)</li>
              <li>Number of travelers</li>
              <li>Preferred travel dates and locations</li>
              <li>Payment information (processed solely by third-party processors)</li>
              <li>Any information you choose to send via email, WhatsApp, or other communication methods</li>
            </ul>
            <p>We do not require or solicit sensitive personal information (e.g., health, ethnicity, religion, 
            biometric data). Any genealogical or family-history details you choose to provide are strictly optional.</p>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">1.2 Information Collected Automatically</h3>
            <p>When you use our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Device and browser information</li>
              <li>Geolocation (approximate)</li>
              <li>Clickstream data, pages viewed, and referring website</li>
              <li>Cookies, tags, beacons, and similar tracking technologies</li>
            </ul>
            <p>We use this information to ensure site functionality, analyze performance, and improve the user experience.</p>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">1.3 Payment Information</h3>
            <p>Payments are processed through secure third-party processors such as Stripe. 
            We do not store or have direct access to your full credit card information.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. How We Use Personal Information</h2>
            <p>We use personal information for the following purposes:</p>
            
            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">2.1 Service Delivery</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding to quote requests</li>
              <li>Planning and operating your travel experience</li>
              <li>Communicating itinerary details</li>
              <li>Facilitating bookings with local guides and service providers</li>
              <li>Providing customer support</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">2.2 Business Operations</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website performance monitoring</li>
              <li>Fraud prevention and security enhancement</li>
              <li>Improving our Services</li>
              <li>Ensuring compliance with legal and contractual obligations</li>
            </ul>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">2.3 Marketing (Optional)</h3>
            <p>With your consent where required, we may send promotional content, display targeted advertisements, 
            and notify you of updates or offers. You may opt out of marketing communications at any time.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Your Rights</h2>
            <p>Depending on your location, you may have rights to access, correct, delete, or restrict processing 
            of your personal information. To exercise these rights, please contact us at hello@nonnatravel.com.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">4. Contact Information</h2>
            <p>If you have questions about this Privacy Policy or wish to exercise privacy rights, please contact us:</p>
            <p>
              <strong>NonnaTravel LLC</strong><br />
              Email: <a href="mailto:hello@nonnatravel.com" className="text-primary-green hover:underline">hello@nonnatravel.com</a><br />
              Phone (US): <a href="tel:+13479935093" className="text-primary-green hover:underline">+1 (347) 993-5093</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

