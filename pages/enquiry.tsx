import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import styles from '@/styles/Enquiry.module.css';

/**
 * Enquiry Page
 * Contact form with Formspree integration and WhatsApp option
 */
export default function Enquiry() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle email submission via Formspree
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setMessage({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      // Replace 'your-form-id' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xnjnoelq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Enquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        // Success - redirect to thank you page
        router.push('/thank-you');
      } else {
        setMessage({ 
          type: 'error', 
          text: 'Failed to send enquiry. Please try again or contact us directly.' 
        });
      }
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'An error occurred. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle WhatsApp submission
  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setMessage({ type: 'error', text: 'Please fill in all fields before sending via WhatsApp.' });
      return;
    }

    const message = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918018335500?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout
      title="Send Enquiry - SmartService Electronic PVT LTD"
      description="Send us your enquiry for electrical and electronics services. We'll get back to you promptly."
    >
      {/* Hero Section */}
      <section className={styles['enquiry-hero']}>
        <div className="container">
          <h1>📝 Send Us Your Enquiry</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem', opacity: 0.95 }}>
            Tell us about your requirements and we'll assist you
          </p>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className={styles['enquiry-section']}>
        <div className={`container ${styles['enquiry-container']}`}>
          
          {/* Introduction */}
          <div className={styles['enquiry-intro']}>
            <h2>How Can We Help You?</h2>
            <p>
              Fill out the form below with your enquiry details. You can submit via email 
              or send directly through WhatsApp for instant communication.
            </p>
          </div>

          {/* Form Container */}
          <div className={styles['form-container']}>
            <div className={styles['form-header']}>
              <h3>Enquiry Form</h3>
              <p>Provide details about your service requirements</p>
            </div>

            {/* Alert Messages */}
            {message.text && (
              <div className={`alert ${message.type === 'error' ? 'alert-error' : 'alert-success'}`}>
                {message.text}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleEmailSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Please describe your problem or requirements in detail..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Options */}
              <div className={styles['submit-options']}>
                <div className={styles['submit-option']}>
                  <h4>📧 Email Submission</h4>
                  <p>We'll respond within 24 hours</p>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : '📧 Send via Email'}
                  </button>
                </div>

                <div className={styles['submit-option']}>
                  <h4>💬 WhatsApp Submission</h4>
                  <p>Get instant response on WhatsApp</p>
                  <button 
                    type="button" 
                    className="btn"
                    style={{ backgroundColor: '#25d366', color: 'white' }}
                    onClick={handleWhatsAppSubmit}
                  >
                    💬 Send via WhatsApp
                  </button>
                </div>
              </div>

              {/* Note */}
              <div className={styles['form-note']}>
                <p>
                  <strong>Note:</strong> All fields are required. Your information will be kept confidential 
                  and used only to respond to your enquiry.
                </p>
              </div>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className={styles['alternative-contact']}>
            <h3>Prefer Direct Contact?</h3>
            <p>You can also reach us through phone or visit our shop</p>
            
            <div className={styles['contact-options']}>
              <a href="tel:+918018335500" className="btn btn-primary">
                📞 Call: 8018335500(Kuna Padhy)
              </a>
              <a href="tel:+919337933995" className="btn btn-primary">
                📞 Call: 9337933995(Kuna Padhy)
              </a>
              <a 
                href="/address"
                className="btn btn-secondary"
              >
                📍 Visit Our Shop
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
