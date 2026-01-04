import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

/**
 * Footer Component
 * Professional footer with company information and links
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-content']}>
          {/* Company Info */}
          <div className={styles['footer-section']}>
            <h3>SmartService Electronic PVT LTD</h3>
            <p>
              Your trusted partner for all electrical and electronics services. 
              Quality service with customer satisfaction guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles['footer-section']}>
            <h3>Quick Links</h3>
            <div className={styles['footer-contact']}>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/address">Address</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/enquiry">Enquiry</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles['footer-section']}>
            <h3>Contact Information</h3>
            <div className={styles['footer-contact']}>
              <div className={styles['footer-contact-item']}>
                <span>📞</span>
                <a href="tel:+918018335500">8018335500(Kuna Padhy)</a>
              </div>
              <div className={styles['footer-contact-item']}>
                <span>📞</span>
                <a href="tel:+919337933995">9337933995(Kuna Padhy)</a>
              </div>
              <div className={styles['footer-contact-item']}>
                <span>📍</span>
                <span>Daluastreet, Near Nurshingh Temple, Berhampur, Orissa - 760002</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles['footer-bottom']}>
          <p>
            © {currentYear} <strong>SmartService Electronic PVT LTD</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
