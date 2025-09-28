'use client';

import Layout from '@/components/Layout';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin />, class: 'linkedin', url: 'https://linkedin.com/in/ahmer-rehman' },
    { name: 'GitHub', icon: <FaGithub />, class: 'github', url: 'https://github.com/ahmer-rehman' },
    { name: 'Email', icon: <FaEnvelope />, class: 'email', url: 'mailto:ahmerrehman734@gmail.com' },
  ];

  return (
    <Layout currentPage="/contact">
      <div className="contact-section">
        <h1 className="contact-title">Wanna Link?</h1>
        <h2 className="contact-subtitle">Hit Me Up!</h2>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <div className={`social-icon ${link.class}`}>
                {link.icon}
              </div>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
