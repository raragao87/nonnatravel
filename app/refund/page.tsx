import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'NonnaTravel Refund & Cancellation Policy - Learn about our cancellation and refund terms.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">Refund & Cancellation Policy</h1>
          <p className="text-text-primary/80 mb-8">Effective Date: [Insert Date]</p>
          
          <div className="prose prose-lg max-w-none space-y-6 text-text-primary">
            <p>
              NonnaTravel strives to provide flexibility while ensuring fair compensation for the local guides, 
              drivers, restaurants, and partners who prepare your experience in advance. This policy reflects the 
              booking conditions agreed upon at purchase.
            </p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">1. Cancellation by the Traveler</h2>
            
            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Cancellations made 3 months or more before the scheduled experience</h3>
            <p>You will receive a full refund of the amount paid.</p>

            <h3 className="text-xl font-heading font-semibold mt-6 mb-3">Cancellations made less than 3 months before the experience</h3>
            <p>Because local partners are already confirmed and costs have been incurred, no refund can be issued.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">2. Rescheduling Policy</h2>
            <p>You may reschedule your experience once, free of charge, if the request is made at least 1 month 
            before your scheduled date. Rescheduling requests made less than 1 month before the experience cannot 
            be accommodated, as local services have already been secured. A rescheduled experience cannot be refunded later.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">3. Changes to Group Size</h2>
            <p>You may add additional travelers at any time, subject to availability. Removing travelers does not 
            entitle you to a partial refund once within the non-refundable window.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">4. Add-ons</h2>
            <p>Add-ons (Cooking, Wine Tasting, Festival, Certificate, Photo/Video) may be canceled for a full refund 
            up to 3 months before the experience date. Add-ons are non-refundable after this deadline. Some add-ons 
            depend on local availability; if NonnaTravel cannot honor an add-on you selected, you will receive a full 
            refund for that add-on.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">5. No-Shows</h2>
            <p>Failure to appear at the designated meeting location or at the confirmed start time will be treated 
            as a non-refundable cancellation.</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">6. Cancellation by NonnaTravel</h2>
            <p>NonnaTravel may need to cancel an experience due to severe weather, safety issues, local partner 
            unavailability, transportation disruptions, or force majeure events. If NonnaTravel cancels your experience, 
            you may choose between a full refund or a new date at no additional cost. NonnaTravel is not responsible 
            for additional expenses you may incur (e.g., flights, hotels, rental cars).</p>

            <h2 className="text-2xl font-heading font-semibold mt-8 mb-4">Summary for Travelers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full refund if canceled 3+ months in advance</li>
              <li>No refund if canceled within 3 months</li>
              <li>One free reschedule if made 1+ month in advance</li>
              <li>Add-ons refundable up to 3 months</li>
              <li>No refund for no-shows</li>
              <li>Full refund or rescheduling if NonnaTravel cancels</li>
            </ul>

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

