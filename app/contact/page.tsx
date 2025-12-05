'use client';

import { useState } from 'react';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Button } from '@/components/Button';
import { Accordion } from '@/components/Accordion';
import { Mail, Phone, Clock } from 'lucide-react';

const cities = [
  { value: 'rome', label: 'Rome' },
  { value: 'naples', label: 'Naples' },
  { value: 'florence', label: 'Florence' },
  { value: 'milan', label: 'Milan' },
  { value: 'venice', label: 'Venice' },
  { value: 'bologna', label: 'Bologna' },
  { value: 'other', label: 'Other' },
];

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
    question: 'How early should I book?',
    answer: 'We recommend booking at least one month in advance to secure your guide, restaurant, and local arrangements. The earlier you book, the more flexibility we have to design the best and most affordable itinerary for your day.',
  },
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    surname: '',
    travelers: '',
    date: '',
    city: '',
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.surname.trim()) newErrors.surname = 'Surname or village is required';
      if (!formData.travelers || parseInt(formData.travelers) < 1) {
        newErrors.travelers = 'Number of travelers is required';
      }
    } else if (currentStep === 2) {
      if (!formData.date) newErrors.date = 'Date is required';
      if (!formData.city) newErrors.city = 'Starting city is required';
    } else if (currentStep === 3) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Valid email is required';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      // TODO: Submit form data to backend
      console.log('Form submitted:', formData);
      alert('Thank you! We will contact you within 12 hours.');
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-green/80 text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Get Your Instant Quote
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl">
            We are here to help you plan your journey back to your roots.
          </p>
          <div className="flex items-center mt-4">
            <Clock className="mr-2" size={20} />
            <span>We reply within 12 hours</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info - Desktop */}
            <div className="hidden lg:block">
              <div className="bg-white p-8 rounded-lg shadow-md sticky top-24">
                <h2 className="text-2xl font-heading font-semibold mb-6">Contact Us</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Mail className="text-primary-green mr-2" size={20} />
                      <span className="font-semibold">Email</span>
                    </div>
                    <a
                      href="mailto:hello@nonnatravel.com"
                      className="text-primary-green hover:underline"
                    >
                      hello@nonnatravel.com
                    </a>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Phone className="text-primary-green mr-2" size={20} />
                      <span className="font-semibold">Phone</span>
                    </div>
                    <div className="space-y-2">
                      <a
                        href="tel:+13479935093"
                        className="block text-primary-green hover:underline"
                      >
                        US: +1 (347) 993-5093
                      </a>
                      <a
                        href="tel:+393409478878"
                        className="block text-primary-green hover:underline"
                      >
                        IT: +39 340 9478878
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                {/* Progress Indicator - Mobile */}
                <div className="mb-8 lg:hidden">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Step {step} of 3</span>
                    <span className="text-sm text-text-primary/60">
                      {Math.round((step / 3) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-green h-2 rounded-full transition-all"
                      style={{ width: `${(step / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Mobile Wizard Steps */}
                <div className="lg:hidden">
                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-semibold mb-6">
                        Tell Us About Your Journey
                      </h2>
                      <Input
                        label="Surname or Village"
                        value={formData.surname}
                        onChange={(e) => updateFormData('surname', e.target.value)}
                        error={errors.surname}
                        required
                        placeholder="Enter your surname or village name"
                      />
                      <Input
                        label="Number of Travelers"
                        type="number"
                        min="1"
                        value={formData.travelers}
                        onChange={(e) => updateFormData('travelers', e.target.value)}
                        error={errors.travelers}
                        required
                      />
                      <div className="flex justify-end">
                        <Button type="button" onClick={handleNext} variant="primary">
                          Next
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-semibold mb-6">
                        When and Where
                      </h2>
                      <Input
                        label="Preferred Date(s)"
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateFormData('date', e.target.value)}
                        error={errors.date}
                        required
                      />
                      <Select
                        label="Preferred Starting City"
                        options={cities}
                        value={formData.city}
                        onChange={(e) => updateFormData('city', e.target.value)}
                        error={errors.city}
                        required
                      />
                      <div className="flex justify-between">
                        <Button type="button" onClick={handleBack} variant="secondary">
                          Back
                        </Button>
                        <Button type="button" onClick={handleNext} variant="primary">
                          Next
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-heading font-semibold mb-6">
                        Contact Information
                      </h2>
                      <Input
                        label="Full Name"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        error={errors.name}
                        required
                      />
                      <Input
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        error={errors.email}
                        required
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        error={errors.phone}
                        required
                      />
                      <div className="flex justify-between">
                        <Button type="button" onClick={handleBack} variant="secondary">
                          Back
                        </Button>
                        <Button type="submit" variant="primary">
                          Get Instant Quote
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Single Form - Desktop */}
                <div className="hidden lg:block">
                  <h2 className="text-2xl font-heading font-semibold mb-6">
                    Request Your Quote
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                  <Input
                    label="Surname or Village"
                    value={formData.surname}
                    onChange={(e) => updateFormData('surname', e.target.value)}
                    error={errors.surname}
                    required
                  />
                  <Input
                    label="Number of Travelers"
                    type="number"
                    min="1"
                    value={formData.travelers}
                    onChange={(e) => updateFormData('travelers', e.target.value)}
                    error={errors.travelers}
                    required
                  />
                  <Input
                    label="Preferred Date(s)"
                    type="date"
                    value={formData.date}
                    onChange={(e) => updateFormData('date', e.target.value)}
                    error={errors.date}
                    required
                  />
                  <Select
                    label="Preferred Starting City"
                    options={cities}
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                    error={errors.city}
                    required
                  />
                  <Input
                    label="Full Name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    error={errors.name}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    error={errors.email}
                    required
                  />
                    <Input
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      error={errors.phone}
                      required
                      className="col-span-2"
                    />
                    <div className="col-span-2">
                      <Button type="submit" variant="primary" className="w-full">
                        Get Instant Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info - Mobile */}
          <div className="lg:hidden mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-heading font-semibold mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="text-primary-green mr-2" size={20} />
                  <span className="font-semibold">Email</span>
                </div>
                <a
                  href="mailto:hello@nonnatravel.com"
                  className="text-primary-green hover:underline"
                >
                  hello@nonnatravel.com
                </a>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Phone className="text-primary-green mr-2" size={20} />
                  <span className="font-semibold">Phone</span>
                </div>
                <div className="space-y-2">
                  <a
                    href="tel:+13479935093"
                    className="block text-primary-green hover:underline"
                  >
                    US: +1 (347) 993-5093
                  </a>
                  <a
                    href="tel:+393409478878"
                    className="block text-primary-green hover:underline"
                  >
                    IT: +39 340 9478878
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion items={faqItems} />
            <div className="text-center mt-8">
              <Button href="/faq" variant="secondary">
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

