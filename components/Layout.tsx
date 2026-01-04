import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

/**
 * Layout Component
 * Wraps all pages with consistent navigation, footer, and SEO
 */
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'SmartService Electronic PVT LTD - Best Electrical & Electronics Services in Berhampur, Odisha',
  description = 'Professional electrical and electronics services in Berhampur, Odisha (Orissa). Expert AC Installation, Repair, Maintenance, CCTV Installation, RO Water Purifier, Washing Machine, Refrigerator, Geyser Service & Repair. 24/7 Emergency Service.',
  keywords = '',
  canonicalUrl = 'https://smartserviceelectronics.com'
}) => {
  const defaultKeywords = 'electrical services Berhampur, electronics repair Odisha, AC installation Berhampur, AC repair Berhampur, AC maintenance Orissa, AC AMC Berhampur, electrical wiring Odisha, CCTV installation Berhampur, CCTV repair Orissa, RO water purifier Berhampur, washing machine repair Odisha, refrigerator service Berhampur, geyser repair Orissa, inverter service Berhampur, treadmill repair Odisha, fan installation Berhampur, electrician Berhampur, appliance repair Orissa, home appliance service Berhampur Odisha';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  // Structured Data for Local Business (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://smartserviceelectronics.com',
    name: 'SmartService Electronic PVT LTD',
    description: description,
    url: 'https://smartserviceelectronics.com',
    telephone: '+91-8018335500',
    alternativeTelephone: '+91-9337933995',
    email: 'info@smartserviceelectronics.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Daluastreet',
      addressLocality: 'Berhampur',
      addressRegion: 'Odisha',
      postalCode: '760002',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.3150',
      longitude: '84.7944'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Berhampur'
      },
      {
        '@type': 'State',
        name: 'Odisha'
      },
      {
        '@type': 'State',
        name: 'Orissa'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '18:00'
      }
    ],
    priceRange: '$$',
    image: 'https://smartserviceelectronics.com/logo.png',
    logo: 'https://smartserviceelectronics.com/logo.png',
    sameAs: [
      'https://smartserviceelectronics.com'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical and Electronics Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Installation',
            description: 'Professional air conditioner installation service'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Repair and Maintenance',
            description: 'AC repair, maintenance and AMC services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical Services',
            description: 'Electrical wiring, maintenance and all electrical repairs'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CCTV Installation and Repair',
            description: 'CCTV camera installation, repair and AMC'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'RO Water Purifier Service',
            description: 'RO water purifier installation, repair and service'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Appliance Repair',
            description: 'Washing machine, refrigerator, geyser, inverter, treadmill repair and service'
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={finalKeywords} />
        <meta name="author" content="SmartService Electronic PVT LTD" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        
        {/* Geo Meta Tags for Local SEO */}
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Berhampur" />
        <meta name="geo.position" content="19.3150;84.7944" />
        <meta name="ICBM" content="19.3150, 84.7944" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="SmartService Electronic PVT LTD" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Business Contact Info */}
        <meta name="contact" content="+91-8018335500, +91-9337933995" />
        <meta name="coverage" content="Berhampur, Odisha, India" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        {children}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
