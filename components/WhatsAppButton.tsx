import React from 'react';
import styles from '@/styles/WhatsAppButton.module.css';

/**
 * WhatsApp Floating Button Component
 * Fixed position button for quick WhatsApp contact
 */
const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '918018335500'; // Country code + number
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className={styles['whatsapp-float']}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      💬
    </a>
  );
};

export default WhatsAppButton;
