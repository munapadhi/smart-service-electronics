import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

/**
 * Layout Component
 * Wraps all pages with consistent navigation, footer, and SEO
 */
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'SmartService Electronic PVT LTD - Electrical & Electronics Services',
  description = 'Professional electrical and electronics services in Berhampur, Orissa. AC Service, CCTV Installation, Electronics Repair and more.'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="electrical services, electronics repair, AC service, CCTV installation, Berhampur, Orissa" />
        <meta name="author" content="SmartService Electronic PVT LTD" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        
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
