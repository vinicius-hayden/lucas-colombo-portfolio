"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { 
      src: '/images/hero/lucas-hero-bg.jpg',
      className: 'hero-slide-lucas-bg'
    },
    { 
      src: '/images/hero/lucas-black-white.JPG',
      className: 'hero-slide-bw'
    },
    { 
      src: '/images/hero/bubas.jpg',
      className: 'hero-slide-bubas'
    },
    { 
      src: '/images/hero/lubas.jpg',
      className: 'hero-slide-lubas'
    },
    { 
      src: '/images/hero/bubas-volleyball.JPG',
      className: 'hero-slide-volleyball'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="hero hero-with-slideshow">
      <div className="hero-background">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${image.className} ${index === currentImageIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${image.src}')`,
            }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-remembering">Remembering</p>
        <h1>Lucas Colombo</h1>
        <p>Visual Artist • Photographer • Filmmaker</p>
        <a href="#portfolio" className="cta-button">View Portfolio</a>
      </div>
    </section>
  );
}
