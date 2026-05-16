import React, { useState, useRef } from 'react';
import { Send, MapPin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { profile } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';
import RetroCard from '../ui/RetroCard';
import BlurFade from '../ui/BlurFade';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!formRef.current) return;

    emailjs
      .sendForm('service_6azgtmb', 'template_yjr1sm8', formRef.current, 'AnmJ0dhRX4xyf3jYG')
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus({ success: true, message: 'Message sent successfully. Talk soon!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch(() => {
        setIsSubmitting(false);
        setSubmitStatus({ success: false, message: 'Something went wrong. Please try again.' });
      });
  };

  const contactItems = [
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="container mx-auto px-4">
        <SectionHeading
          level="FINAL"
          label="Contact"
          title="Send Message"
          description="Press start on your next project."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <BlurFade className="lg:col-span-2 space-y-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="p-2 retro-card-sm text-accent shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-0.5">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-muted hover:text-accent transition-colors text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
            <p className="text-muted text-sm pt-4 border-t border-border">
              Open to freelance work and interesting collaborations.
            </p>
          </BlurFade>

          <BlurFade delay={100} className="lg:col-span-3">
            <RetroCard className="p-8">
              <h3 className="font-pixel text-[10px] mb-6">SEND MESSAGE</h3>

              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-xl text-sm ${
                    submitStatus.success
                      ? 'bg-accent/10 text-accent border border-accent/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-retro"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-muted mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-retro"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-muted mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-retro"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-retro resize-none"
                    placeholder="Tell me about your idea..."
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-retro w-full sm:w-auto disabled:opacity-60">
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} /> Send message
                    </>
                  )}
                </button>
              </form>
            </RetroCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
