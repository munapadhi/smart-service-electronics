import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import styles from '@/styles/Home.module.css';

/**
 * Home Page - Landing Page
 * Features hero section, service highlights, and call-to-action
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const sliderData = [
    {
      title: 'AC Installation',
      subtitle: 'Professional AC Installation Services',
      description: 'Expert installation for all brands and types',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '❄️'
    },
    {
      title: 'AC Repairing',
      subtitle: 'Fast & Reliable AC Repair',
      description: 'Quick diagnosis and repair for all AC problems',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      icon: '🔧'
    },
    {
      title: 'AC Maintenance',
      subtitle: 'Regular AC Maintenance',
      description: 'Keep your AC running efficiently all year',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '✅'
    },
    {
      title: 'AC AMC',
      subtitle: 'Annual Maintenance Contract',
      description: 'Hassle-free AC care with priority support',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      icon: '📋'
    },
    {
      title: 'Electrical Wiring',
      subtitle: 'Professional Electrical Wiring',
      description: 'Safe and certified wiring installations',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      icon: '⚡'
    },
    {
      title: 'Electrical Maintenance',
      subtitle: 'Regular Electrical Maintenance',
      description: 'Ensure safety with periodic inspections',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      icon: '🔌'
    },
    {
      title: 'All Electrical Services',
      subtitle: 'Complete Electrical Solutions',
      description: 'All types of electrical service and repairs',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      icon: '💡'
    },
    {
      title: 'Geyser Service',
      subtitle: 'Geyser Service and Maintenance',
      description: 'Installation, repair and maintenance',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      icon: '🚿'
    },
    {
      title: 'Refrigerator Service',
      subtitle: 'Refrigerator Service and Maintenance',
      description: 'Keep your fridge running perfectly',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      icon: '🧊'
    },
    {
      title: 'CCTV Installation',
      subtitle: 'CCTV Installation and Service',
      description: 'Complete security camera solutions',
      gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
      icon: '📹'
    },
    {
      title: 'CCTV Repair & AMC',
      subtitle: 'CCTV Repair and AMC',
      description: 'Maintenance contracts available',
      gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      icon: '🔒'
    },
    {
      title: 'RO Water Purifier Installation',
      subtitle: 'RO Installation Services',
      description: 'Clean and safe drinking water',
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      icon: '💧'
    },
    {
      title: 'RO Water Purifier Repair',
      subtitle: 'RO Repair Services',
      description: 'Expert repair for all brands',
      gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      icon: '🔧'
    },
    {
      title: 'RO Water Purifier Service',
      subtitle: 'RO Service & Maintenance',
      description: 'Regular servicing for water quality',
      gradient: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
      icon: '💦'
    },
    {
      title: 'Washing Machine Service',
      subtitle: 'Washing Machine Service and Repair',
      description: 'All types and brands serviced',
      gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      icon: '🧺'
    },
    {
      title: 'Inverter Repair',
      subtitle: 'Inverter Repair and Service',
      description: 'Power backup solutions',
      gradient: 'linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%)',
      icon: '🔋'
    },
    {
      title: 'Treadmill Service',
      subtitle: 'Treadmill Service and Repair',
      description: 'Keep your fitness equipment running',
      gradient: 'linear-gradient(135deg, #a8e063 0%, #56ab2f 100%)',
      icon: '🏃'
    },
    {
      title: 'Fan & Light Installation',
      subtitle: 'Fan, Light Installation and Repair',
      description: 'Complete installation and repair services',
      gradient: 'linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%)',
      icon: '💨'
    }
  ];

  // Auto-slide effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [sliderData.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const services = [
    {
      icon: '❄️',
      title: 'AC Installation',
      description: 'Professional air conditioner installation for all types and brands with expert setup.'
    },
    {
      icon: '🔧',
      title: 'AC Repair',
      description: 'Fast and reliable AC repair services for all cooling issues and problems.'
    },
    {
      icon: '✅',
      title: 'AC Maintenance',
      description: 'Regular AC maintenance to keep your air conditioner running efficiently.'
    },
    {
      icon: '📋',
      title: 'AC AMC',
      description: 'Annual Maintenance Contracts for hassle-free AC care throughout the year.'
    },
    {
      icon: '⚡',
      title: 'Electrical Wiring',
      description: 'Professional electrical wiring services for homes and commercial spaces.'
    },
    {
      icon: '🔌',
      title: 'Electrical Maintenance',
      description: 'Regular electrical maintenance for safe and efficient system operation.'
    },
    {
      icon: '💡',
      title: 'All Electrical Services',
      description: 'Complete electrical solutions and repairs for all your needs.'
    },
    {
      icon: '🚿',
      title: 'Geyser Service',
      description: 'Expert geyser installation, repair, and maintenance for all brands.'
    },
    {
      icon: '🧊',
      title: 'Refrigerator Service',
      description: 'Professional refrigerator repair and maintenance for all brands.'
    },
    {
      icon: '📹',
      title: 'CCTV Installation',
      description: 'Complete CCTV camera installation and setup for homes and businesses.'
    },
    {
      icon: '🔒',
      title: 'CCTV Repair & AMC',
      description: 'CCTV repair services and annual maintenance contracts available.'
    },
    {
      icon: '💧',
      title: 'RO Purifier Installation',
      description: 'Professional RO water purifier installation for clean drinking water.'
    },
    {
      icon: '🔧',
      title: 'RO Purifier Repair',
      description: 'Expert RO water purifier repair services for all brands and models.'
    },
    {
      icon: '💦',
      title: 'RO Purifier Service',
      description: 'Regular RO water purifier servicing to maintain water quality.'
    },
    {
      icon: '🧺',
      title: 'Washing Machine Service',
      description: 'Complete washing machine repair and service for all types.'
    },
    {
      icon: '🔋',
      title: 'Inverter Repair',
      description: 'Expert inverter and UPS repair services for power backup systems.'
    },
    {
      icon: '🏃',
      title: 'Treadmill Service',
      description: 'Professional treadmill repair and maintenance for all brands.'
    },
    {
      icon: '💨',
      title: 'Fan & Light Service',
      description: 'Complete fan and light installation, repair, and maintenance services.'
    }
  ];

  const features = [
    {
      icon: '✅',
      title: 'Trusted Service',
      description: 'Years of experience in electrical services'
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description: 'Fast and efficient service delivery'
    },
    {
      icon: '💯',
      title: 'Quality Assured',
      description: 'Guaranteed satisfaction with every job'
    }
  ];

  return (
    <Layout
      title="Best Electrical & Electronics Services in Berhampur, Odisha | SmartService Electronic"
      description="SmartService Electronic PVT LTD - Leading electrical and electronics service provider in Berhampur, Odisha. Expert AC Installation, Repair, Maintenance, AMC, CCTV Installation, RO Water Purifier, Washing Machine, Refrigerator, Geyser, Inverter Service. Call: 8018335500, 9337933995"
      keywords="best electrical services Berhampur, top electronics repair Odisha, AC service Berhampur, AC installation Orissa, home appliance repair Berhampur, electrician near me Berhampur, 24/7 electrical service Odisha"
      canonicalUrl="https://smartserviceelectronics.com"
    >
      {/* Hero Slider Section */}
      <section className={styles['slider-section']}>
        <div className={styles['slider-container']}>
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className={`${styles['slide']} ${index === currentSlide ? styles['active'] : ''}`}
              style={{ background: slide.gradient }}
            >
              <div className={styles['slide-content']}>
                <div className={styles['slide-icon']}>{slide.icon}</div>
                <h1 className={styles['slide-title']}>{slide.title}</h1>
                <h2 className={styles['slide-subtitle']}>{slide.subtitle}</h2>
                <p className={styles['slide-description']}>{slide.description}</p>
                <div className={styles['slide-buttons']}>
                  <Link href="/services" className="btn btn-primary">
                    View All Services
                  </Link>
                  <Link href="/enquiry" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button className={styles['slider-arrow-left']} onClick={prevSlide} aria-label="Previous slide">
            ‹
          </button>
          <button className={styles['slider-arrow-right']} onClick={nextSlide} aria-label="Next slide">
            ›
          </button>

          {/* Slider Dots */}
          <div className={styles['slider-dots']}>
            {sliderData.map((_, index) => (
              <button
                key={index}
                className={`${styles['dot']} ${index === currentSlide ? styles['active'] : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company Name Badge */}
        <div className={styles['company-badge']}>
          <span className={styles['badge-icon']}>⚡</span>
          <span className={styles['badge-text']}>SmartService Electronics PVT LTD</span>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className={styles['services-preview']}>
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Professional electrical and electronics services tailored to your needs
          </p>
          
          <div className={styles['services-grid']}>
            {services.map((service, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-icon']}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          
          <div className={styles['features-grid']}>
            {features.map((feature, index) => (
              <div key={index} className={styles['feature-item']}>
                <div className={styles['feature-icon']}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={styles['cta-section']}>
        <div className="container">
          <h2 className={styles['cta-title']}>Need Electrical Service?</h2>
          <p className={styles['cta-description']}>
            Contact us today for quick and professional service
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/enquiry" className="btn" style={{ backgroundColor: 'white', color: 'var(--secondary-color)' }}>
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
