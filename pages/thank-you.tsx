import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/ThankYou.module.css';

/**
 * Thank You Page
 * Success page displayed after enquiry form submission
 */
export default function ThankYou() {
  return (
    <Layout
      title="Thank You - Enquiry Received | SmartService Electronic Berhampur"
      description="Thank you for contacting SmartService Electronic PVT LTD. We have received your enquiry and will respond within 24 hours. For urgent assistance, call 8018335500 or 9337933995."
      canonicalUrl="https://smartserviceelectronics.com/thank-you"
    >
      <div className={styles['thankyou-container']}>
        <div className={styles['thankyou-card']}>
          {/* Success Icon */}
          <div className={styles['success-icon']}>✅</div>

          {/* Main Heading */}
          <h1>Thank You!</h1>
          <h2>Your Enquiry Has Been Received</h2>

          {/* Message */}
          <p>
            We appreciate you reaching out to SmartService Electronic PVT LTD. 
            Your enquiry has been successfully submitted and our team will review it shortly.
          </p>

          {/* What's Next */}
          <div className={styles['thankyou-info']}>
            <h3>What Happens Next?</h3>
            <ul>
              <li>Our team will review your enquiry within 24 hours</li>
              <li>We'll contact you with a solution or quote</li>
              <li>You can expect a response via your preferred contact method</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className={styles['action-buttons']}>
            <Link href="/" className="btn btn-primary">
              🏠 Back to Home
            </Link>
            <Link href="/services" className="btn btn-secondary">
              🔧 View Our Services
            </Link>
          </div>

          {/* Contact Information */}
          <div className={styles['contact-info']}>
            <h3>Need Immediate Assistance?</h3>
            <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>
              For urgent matters, feel free to call us directly
            </p>
            
            <div className={styles['contact-numbers']}>
              <a href="tel:+918018335500" className={styles['contact-number']}>
                <span>📞</span>
                <span>8018335500(Kuna Padhy)</span>
              </a>
              <a href="tel:+919337933995" className={styles['contact-number']}>
                <span>📞</span>
                <span>9337933995(Kuna Padhy)</span>
              </a>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a 
                href="https://wa.me/918018335500?text=Hi%2C%20I%20just%20submitted%20an%20enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ backgroundColor: '#25d366', color: 'white' }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Additional Message */}
          <p style={{ marginTop: '2rem', fontSize: '0.95rem', color: 'var(--text-color)' }}>
            Thank you for choosing SmartService Electronic PVT LTD. 
            We look forward to serving you!
          </p>
        </div>
      </div>
    </Layout>
  );
}
