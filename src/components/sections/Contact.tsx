import React, { useState, useRef } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_6azgtmb', // 🔁 Replace with your EmailJS service ID
          'template_yjr1sm8', // 🔁 Replace with your EmailJS template ID
          formRef.current,
          'AnmJ0dhRX4xyf3jYG' // 🔁 Replace with your EmailJS public key
        )
        .then(() => {
          setIsSubmitting(false);
          setSubmitStatus({
            success: true,
            message: 'Thank you! Your message has been sent successfully.'
          });
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setTimeout(() => setSubmitStatus(null), 5000);
        })
        .catch(() => {
          setIsSubmitting(false);
          setSubmitStatus({
            success: false,
            message: 'Oops! Something went wrong. Please try again.'
          });
        });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                    <a 
                      href="mailto:bejoy@example.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      bejoyjbt7@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a 
                      href="tel:+919876543210" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      +91 93421 80517
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Build Something!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Currently available for freelance work and interesting project collaborations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

                {submitStatus && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.success 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
