import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css';

/**
 * Navbar Component
 * Responsive navigation bar with mobile menu toggle
 * Shows active page highlighting
 */
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Address', path: '/address' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Enquiry', path: '/enquiry' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        {/* Brand Logo/Name */}
        <Link href="/" className={styles['navbar-brand']}>
          <span className={styles['brand-icon']}>⚡</span>
          <span>SmartService Electronics</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={styles['navbar-toggle']} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Menu */}
        <ul className={`${styles['navbar-menu']} ${isMenuOpen ? styles.active : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} className={styles['navbar-item']}>
              <Link
                href={item.path}
                className={`${styles['navbar-link']} ${isActive(item.path) ? styles.active : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
