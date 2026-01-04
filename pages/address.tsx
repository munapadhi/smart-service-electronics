import React from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/Address.module.css';

/**
 * Address Page
 * Displays company address with Google Maps integration
 */
export default function Address() {
  // Google Maps coordinates for Berhampur, Orissa (approximate)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59850.76234!2d84.7944!3d19.3150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d4f0eff1f1b7b%3A0x7cc9f3c4f87e7a5c!2sBerhampur%2C%20Odisha%20760002!5e0!3m2!1sen!2sin!4v1234567890";
  
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Daluastreet+Berhampur+Orissa+760002";

  return (
    <Layout
      title="Our Address - SmartService Electronic PVT LTD"
      description="Visit us at Daluastreet, Berhampur, Orissa - 760002. Find directions and location details."
    >
      {/* Hero Section */}
      <section className={styles['address-hero']}>
        <div className="container">
          <h1>📍 Visit Our Shop</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem', opacity: 0.95 }}>
            Come meet us at our location in Berhampur
          </p>
        </div>
      </section>

      {/* Address Content */}
      <section className={styles['address-content']}>
        <div className="container">
          <div className={styles['address-grid']}>
            {/* Address Details Card */}
            <div className={styles['address-card']}>
              <div className={styles['address-icon']}>🏢</div>
              <h2>Our Location</h2>
              <div className={styles['address-details']}>
                <strong>SmartService Electronic PVT LTD</strong>
                <p>Daluastreet</p>
                <p>Near Nurshingh Temple</p>
                <p>Berhampur</p>
                <p>Orissa – 760002</p>
                <p>India</p>

                <strong style={{ marginTop: '2rem' }}>Contact Information</strong>
                <p>📞 <a href="tel:+918018335500">8018335500(Kuna Padhy)</a></p>
                <p>📞 <a href="tel:+919337933995">9337933995(Kuna Padhy)</a></p>

                <strong style={{ marginTop: '2rem' }}>Business Hours</strong>
                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>

              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '2rem', width: '100%' }}
              >
                🗺️ Get Directions
              </a>
            </div>

            {/* Map Container */}
            <div className={styles['map-container']}>
              <h3>📌 Find Us on Map</h3>
              <iframe
                className={styles['map-frame']}
                src={mapEmbedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SmartService Electronic Location"
              ></iframe>
              <p style={{ marginTop: '1rem', color: 'var(--text-color)', fontSize: '0.9rem' }}>
                * Map shows approximate location of Berhampur area
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="card" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--dark-color)', marginBottom: '1rem' }}>
              Need Help Finding Us?
            </h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-color)' }}>
              Call us for directions or any assistance. We're here to help!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+918018335500" className="btn btn-primary">
                📞 Call Now
              </a>
              <a 
                href="https://wa.me/918018335500?text=Hi%2C%20I%20need%20help%20finding%20your%20location"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
