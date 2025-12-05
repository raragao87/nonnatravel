import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'NonnaTravel Cookie Policy - Learn about how we use cookies and tracking technologies.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Cookie Policy</h1>
          <p className="text-text-primary/80 mb-8">Effective Date: [Insert Date]</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-text-primary">
            <p>
              NonnaTravel uses cookies and similar tracking technologies to improve your experience on our website.
            </p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small files stored on your device that help our website function properly, analyze usage, 
            and personalize content.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Strictly Necessary Cookies</h3>
            <p>Required for core website functionality (cannot be disabled).</p>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Performance & Analytics Cookies</h3>
            <p>Help us understand how users interact with the site. Examples: Google Analytics, heatmaps.</p>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Functional Cookies</h3>
            <p>Remember preferences such as language or location.</p>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Targeting/Advertising Cookies</h3>
            <p>Used for retargeting and showing relevant ads (only with consent for EU users).</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Cookie Management</h2>
            <p>You can manage or disable cookies using our cookie banner (EU users) and your browser settings.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
            <p>Some cookies are placed by third-party services (e.g., analytics, payment processors). 
            These providers maintain their own privacy policies.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">Contact Information</h2>
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

