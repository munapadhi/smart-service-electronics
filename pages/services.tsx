import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Services.module.css';

/**
 * Services Page
 * Displays all services offered in detailed card format
 */
export default function Services() {
  const services = [
    {
      icon: '❄️',
      title: 'AC Installation',
      description: 'Professional air conditioner installation for all types and brands. Expert setup for optimal cooling performance.',
      features: [
        'All Brand AC Installation',
        'Split & Window AC Setup',
        'Proper Placement & Mounting',
        'Gas Charging Included',
        'Post-Installation Testing'
      ]
    },
    {
      icon: '🔧',
      title: 'AC Repair',
      description: 'Fast and reliable AC repair services. Our technicians diagnose and fix all AC problems efficiently.',
      features: [
        'Quick Problem Diagnosis',
        'All Types of Repairs',
        'Cooling Issues Resolution',
        'Gas Leakage Repair',
        'Emergency Repair Service'
      ]
    },
    {
      icon: '✅',
      title: 'AC Maintenance',
      description: 'Regular AC maintenance to keep your air conditioner running efficiently and extend its lifespan.',
      features: [
        'Deep Cleaning Service',
        'Filter Replacement',
        'Gas Top-up',
        'Performance Check',
        'Preventive Maintenance'
      ]
    },
    {
      icon: '📋',
      title: 'AC AMC (Annual Maintenance Contract)',
      description: 'Comprehensive annual maintenance contracts for hassle-free AC care throughout the year.',
      features: [
        'Regular Service Visits',
        'Priority Support',
        'Discounted Repairs',
        'Gas Top-up Included',
        'Extended Warranty Benefits'
      ]
    },
    {
      icon: '⚡',
      title: 'Electrical Wiring',
      description: 'Professional electrical wiring services for homes, offices, and commercial spaces with safety standards.',
      features: [
        'New Wiring Installation',
        'Rewiring Services',
        'Circuit Design & Setup',
        'Safety Compliance',
        'Quality Materials Used'
      ]
    },
    {
      icon: '🔌',
      title: 'Electrical Maintenance',
      description: 'Regular electrical maintenance to ensure safe and efficient operation of your electrical systems.',
      features: [
        'Periodic Inspections',
        'Safety Testing',
        'Circuit Maintenance',
        'Switch & Socket Repair',
        'Preventive Care'
      ]
    },
    {
      icon: '💡',
      title: 'All Types of Electrical Services and Repairs',
      description: 'Complete electrical solutions for all your needs. Expert electricians for any electrical work.',
      features: [
        'Emergency Electrical Repairs',
        'Circuit Breaker Replacement',
        'Power Distribution Setup',
        'Electrical Panel Upgrades',
        '24/7 Emergency Service'
      ]
    },
    {
      icon: '🚿',
      title: 'Geyser Service and Maintenance',
      description: 'Expert geyser installation, repair, and maintenance services for all brands and types.',
      features: [
        'Geyser Installation',
        'Heating Element Replacement',
        'Thermostat Repair',
        'Leak Repair',
        'Regular Servicing'
      ]
    },
    {
      icon: '🧊',
      title: 'Refrigerator Service and Maintenance',
      description: 'Professional refrigerator repair and maintenance for all brands. Keep your food fresh and cool.',
      features: [
        'Cooling Problem Solutions',
        'Gas Refilling',
        'Compressor Repair',
        'Door Seal Replacement',
        'All Brand Service'
      ]
    },
    {
      icon: '📹',
      title: 'CCTV Installation and Service',
      description: 'Complete CCTV camera installation and setup services for homes and businesses with HD quality.',
      features: [
        'HD Camera Installation',
        'DVR/NVR Setup',
        'Remote Viewing Configuration',
        'Strategic Placement',
        'Complete System Setup'
      ]
    },
    {
      icon: '🔒',
      title: 'CCTV Repair and AMC',
      description: 'CCTV repair services and annual maintenance contracts to keep your security systems functional.',
      features: [
        'Camera Repair',
        'DVR/NVR Repair',
        'Annual Maintenance Plans',
        'Regular Check-ups',
        'Priority Support'
      ]
    },
    {
      icon: '💧',
      title: 'RO Water Purifier Installation',
      description: 'Professional RO water purifier installation for clean and safe drinking water at your premises.',
      features: [
        'All Brand Installation',
        'Proper Placement Setup',
        'Pipeline Connection',
        'Initial Service',
        'Water Testing'
      ]
    },
    {
      icon: '🔧',
      title: 'RO Water Purifier Repair',
      description: 'Expert RO water purifier repair services for all brands and models. Fast and reliable solutions.',
      features: [
        'Leak Repair',
        'Pump Replacement',
        'Membrane Replacement',
        'Filter Replacement',
        'Complete Diagnosis'
      ]
    },
    {
      icon: '💦',
      title: 'RO Water Purifier Service',
      description: 'Regular RO water purifier servicing to maintain water quality and system efficiency.',
      features: [
        'Filter Change',
        'Membrane Cleaning',
        'TDS Testing',
        'Sanitization',
        'Performance Check'
      ]
    },
    {
      icon: '🧺',
      title: 'Washing Machine Service and Repair',
      description: 'Complete washing machine repair and service for all types - automatic, semi-automatic, and front-load.',
      features: [
        'All Brand Service',
        'Drum Repair',
        'Motor Replacement',
        'Water Inlet Issues',
        'Spin & Wash Problems'
      ]
    },
    {
      icon: '🔋',
      title: 'Inverter Repair and Service',
      description: 'Expert inverter and UPS repair services. Keep your power backup systems running efficiently.',
      features: [
        'Battery Testing',
        'Circuit Board Repair',
        'Charging Issues',
        'All Brand Service',
        'AMC Available'
      ]
    },
    {
      icon: '🏃',
      title: 'Treadmill Service and Repair',
      description: 'Professional treadmill repair and maintenance services for all brands and models.',
      features: [
        'Belt Adjustment',
        'Motor Repair',
        'Control Panel Repair',
        'Lubrication Service',
        'All Parts Available'
      ]
    },
    {
      icon: '💨',
      title: 'Fan and Light Installation and Repair',
      description: 'Complete fan and light installation, repair, and maintenance services for homes and offices.',
      features: [
        'Ceiling Fan Installation',
        'Fan Repair & Service',
        'Light Fitting Installation',
        'Wiring & Connection',
        'All Types of Fixtures'
      ]
    }
  ];

  return (
    <Layout
      title="Our Services - AC, CCTV, RO, Washing Machine Repair | Berhampur, Odisha"
      description="Complete list of electrical and electronics services in Berhampur, Odisha: AC Installation & Repair, AC Maintenance & AMC, Electrical Wiring, CCTV Installation & Repair, RO Water Purifier Service, Washing Machine, Refrigerator, Geyser, Inverter, Treadmill Repair, Fan & Light Installation."
      keywords="AC installation Berhampur, AC repair Odisha, AC maintenance Berhampur, AC AMC Orissa, electrical wiring Berhampur, CCTV installation Odisha, CCTV repair Berhampur, RO water purifier Berhampur, washing machine repair Odisha, refrigerator service Berhampur, geyser repair Orissa, inverter service Berhampur, treadmill repair Odisha, fan installation Berhampur"
      canonicalUrl="https://smartserviceelectronics.com/services"
    >
      {/* Hero Section */}
      <section className={styles['services-hero']}>
        <div className="container">
          <h1>🔧 Our Services</h1>
          <p style={{ fontSize: '1.25rem', marginTop: '1rem', opacity: 0.95 }}>
            Professional electrical and electronics solutions for all your needs
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={styles['services-section']}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Expert services delivered by skilled technicians with years of experience
          </p>

          <div className={styles['services-grid']}>
            {services.map((service, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-card-header']}>
                  <div className={styles['service-card-icon']}>{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                
                <div className={styles['service-card-body']}>
                  <p>{service.description}</p>
                  
                  <ul className={styles['service-features']}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles['service-card-footer']}>
                  <Link href="/enquiry" className="btn btn-primary" style={{ width: '100%' }}>
                    Request Service
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={styles['services-cta']}>
            <h2>Need Our Service?</h2>
            <p>
              Contact us today for a free consultation and quote
            </p>
            <div className={styles['cta-buttons']}>
              <Link href="/enquiry" className="btn btn-primary">
                📝 Send Enquiry
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                📞 Call Us Now
              </Link>
              <a 
                href="https://wa.me/918018335500?text=Hi%2C%20I%20need%20information%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ backgroundColor: '#25d366', color: 'white' }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
