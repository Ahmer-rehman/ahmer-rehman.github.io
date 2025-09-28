'use client';

import React, { useEffect, useState, useRef } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([]);

  useEffect(() => {
    // Generate random stars
    const starArray = [];
    for (let i = 0; i < 120; i++) {
      starArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`
      });
    }
    setStars(starArray);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Education', href: '/education' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div>
      {/* Stars Background */}
      <div className="stars-background">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      {/* Uzafir-Style Navigation */}
      <nav className="navigation">
        {navigationItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`nav-link ${currentPage === item.href ? 'active' : ''}`}
          >
            <span className="nav-text">{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
