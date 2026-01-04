import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Contact.module.css';

/**
 * Contact Page
 * Displays contact information with call-to-action buttons
 */
export default function Contact() {
  const phoneNumbers = [
    { number: '8018335500', display: '8018335500' },
    { number: '9337933995', display: '9337933995' }
  ];

  return (
    <Layout
      title="Contact Us - Call 8018335500, 9337933995 | SmartService Electronic Berhampur"
      description="Contact SmartService Electronic PVT LTD for electrical and electronics services in Berhampur, Odisha. Phone: 8018335500, 9337933995. WhatsApp available. Fast response, emergency service available 24/7."
      keywords="contact electrician Berhampur, emergency electrical service Odisha, AC repair contact Berhampur, electronics service phone number Berhampur, 24/7 appliance repair Odisha, electrician near me contact"
      canonicalUrl="https://smartserviceelectronics.com/contact"
    >
      {/* Hero Section */}
      <section className={styles['contact-hero']}>
        <div className="container">
          <h1>📞 Contact Us</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem', opacity: 0.95 }}>
            We're here to help! Reach out to us anytime
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={styles['contact-section']}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Choose your preferred way to contact us
          </p>

          <div className={styles['contact-grid']}>
            {/* Phone Contact Card */}
            <div className={styles['contact-card']}>
              <div className={styles['contact-icon']}>📱</div>
              <h3>Call Us Directly</h3>
              <p>
                Speak with our team for immediate assistance. Available during business hours.
              </p>
              
              <div className={styles['contact-numbers']}>
                {phoneNumbers.map((phone, index) => (
                  <a 
                    key={index}
                    href={`tel:+91${phone.number}`}
                    className={styles['phone-number']}
                  >
                    <span>📞</span>
                    <span>{phone.display}</span>
                  </a>
                ))}
              </div>

              <div className={styles['action-buttons']}>
                <a href="tel:+918018335500" className="btn btn-primary">
                  Call Now
                </a>
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <div className={styles['contact-card']}>
              <div className={styles['contact-icon']}>💬</div>
              <h3>WhatsApp Chat</h3>
              <p>
                Send us a message on WhatsApp for quick responses and instant communication.
              </p>
              
              <div className={styles['contact-numbers']}>
                <div className={styles['phone-number']} style={{ cursor: 'default', backgroundColor: '#e8f5e9' }}>
                  <span>📱</span>
                  <span>8018335500(Kuna Padhy)</span>
                </div>
              </div>

              <div className={styles['action-buttons']}>
                <a 
                  href="https://wa.me/918018335500?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ backgroundColor: '#25d366', color: 'white' }}
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Enquiry Form Card */}
            <div className={styles['contact-card']}>
              <div className={styles['contact-icon']}>📧</div>
              <h3>Send Enquiry</h3>
              <p>
                Fill out our enquiry form with your requirements and we'll get back to you soon.
              </p>
              
              <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--light-color)', borderRadius: '0.5rem' }}>
                <p style={{ color: 'var(--dark-color)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Quick & Easy
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                  Describe your problem and we'll contact you with a solution
                </p>
              </div>

              <div className={styles['action-buttons']}>
                <Link href="/enquiry" className="btn btn-secondary">
                  📝 Send Enquiry
                </Link>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className={styles['business-hours']}>
            <h3>⏰ Business Hours</h3>
            <p style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>
              We're open and ready to serve you
            </p>
            
            <div className={styles['hours-list']}>
              <div className={styles['hours-item']}>
                <strong>Monday - Friday</strong>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className={styles['hours-item']}>
                <strong>Saturday</strong>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className={styles['hours-item']}>
                <strong>Sunday</strong>
                <span>10:00 AM - 6:00 PM</span>
              </div>
            </div>

            <p style={{ marginTop: '1.5rem', color: 'var(--text-color)', fontSize: '0.9rem' }}>
              * Emergency services available 24/7 for existing customers
            </p>
          </div>

          {/* Quick Contact CTA */}
          <div className={styles['quick-contact']}>
            <h2>Need Immediate Assistance?</h2>
            <p>
              Our team is ready to help you with your electrical and electronics needs
            </p>
            <div className={styles['quick-contact-buttons']}>
              <a href="tel:+918018335500" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>
                📞 Call: 8018335500(Kuna Padhy)
              </a>
              <a href="tel:+919337933995" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>
                📞 Call: 9337933995(Kuna Padhy)
              </a>
              <Link href="/address" className="btn btn-secondary">
                📍 Visit Our Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
