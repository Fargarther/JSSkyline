'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';

const serviceOptions = [
  'Aerial Marketing & Real Estate',
  'Inspections & Construction Monitoring',
  'Mapping & Site Visualization',
  'Legal & Investigative',
  'Studio Photography',
  'Other'
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [] as string[],
    location: '',
    timeline: '',
    message: '',
    file: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setStep(1);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          services: [],
          location: '',
          timeline: '',
          message: '',
          file: null
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl" className="pt-32">
        <div className="text-center mb-16">
          <motion.h1
            className="display-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Started Today
          </motion.h1>
          <motion.p
            className="body-lg text-neutral-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your project with professional aerial and studio imaging? 
            Let's discuss your specific needs and create a custom solution.
          </motion.p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="secondary" withPinline>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  {[1, 2, 3].map((stepNum) => (
                    <div key={stepNum} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step >= stepNum 
                          ? 'bg-orange-primary text-neutral-950' 
                          : 'bg-neutral-700 text-neutral-400'
                      }`}>
                        {stepNum}
                      </div>
                      {stepNum < 3 && (
                        <div className={`w-16 h-0.5 mx-2 ${
                          step > stepNum ? 'bg-orange-primary' : 'bg-neutral-700'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <h2 className="text-xl font-display text-orange-primary">
                  {step === 1 && 'Contact Information'}
                  {step === 2 && 'Project Details'}
                  {step === 3 && 'Additional Information'}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.name || !formData.email}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-3">
                        Services Interested In *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {serviceOptions.map((service) => (
                          <label key={service} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceToggle(service)}
                              className="w-4 h-4 text-orange-primary bg-neutral-800 border-neutral-600 rounded focus:ring-orange-primary"
                            />
                            <span className="text-neutral-300 text-sm">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          placeholder="City, State or Address"
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="ASAP">ASAP</option>
                          <option value="1-2 weeks">1-2 weeks</option>
                          <option value="1 month">1 month</option>
                          <option value="2-3 months">2-3 months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-secondary flex-1"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={formData.services.length === 0}
                        className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Project Details
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={6}
                        placeholder="Tell us about your project, specific requirements, or any questions you have..."
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Attach File (Optional)
                      </label>
                      <input
                        type="file"
                        onChange={(e) => setFormData({...formData, file: e.target.files?.[0] || null})}
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:ring-2 focus:ring-orange-primary focus:border-transparent"
                      />
                      <p className="text-xs text-neutral-500 mt-1">
                        Upload site plans, reference images, or other relevant files
                      </p>
                    </div>
                    
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="btn-secondary flex-1"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-900/20 border border-green-800 rounded-lg"
                >
                  <p className="text-green-400">Thank you! We'll be in touch within 24 hours.</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-lg"
                >
                  <p className="text-red-400">Something went wrong. Please try again or email us directly.</p>
                </motion.div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display text-orange-primary mb-4">
                  Get In Touch Directly
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 text-orange-primary">📧</div>
                    <span className="text-neutral-300">hello@jsskyline.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 text-orange-primary">📱</div>
                    <span className="text-neutral-300">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 text-orange-primary">⏰</div>
                    <span className="text-neutral-300">Response within 24 hours</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display text-orange-primary mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-primary text-neutral-950 rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                    <div>
                      <p className="font-medium text-neutral-200">Initial Consultation</p>
                      <p className="text-sm text-neutral-400">We'll discuss your project needs and objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-primary text-neutral-950 rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                    <div>
                      <p className="font-medium text-neutral-200">Custom Proposal</p>
                      <p className="text-sm text-neutral-400">Detailed quote with timeline and deliverables</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-primary text-neutral-950 rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                    <div>
                      <p className="font-medium text-neutral-200">Project Execution</p>
                      <p className="text-sm text-neutral-400">Professional capture and post-production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}