"use client";

import Image from "next/image";
import { useState } from "react";
import MediaViewer from "./MediaViewer";

export default function Portfolio() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const portfolioItems = [
    {
      title: "SUA Men's Volleyball Team",
      description: "SUA Men's Volleyball Team practice capturing the intensity and teamwork of collegiate athletics.",
      category: "Sports Photography",
      image: "volleyball.jpg",
      date: "January 10th, 2025"
    },
    {
      title: "Orange County Black History Month Parade",
      description: "Street photography from the Orange County Black History Month parade in Anaheim, California, celebrating community and heritage.",
      category: "Street Photography",
      image: "street_photo.jpg",
      date: "February 1st, 2025"
    },
    {
      title: "Artistic New York",
      description: "And to end, Artistic New York 🎨 - capturing the creative energy and artistic spirit of the city.",
      category: "Street Photography",
      image: "street_photo1.jpg",
      date: "February 24th, 2025"
    },
    {
      title: "SUA Student Fall Music Performance",
      description: "The PAC Hosts the 42nd SUA Student Fall Music Performance: An Evening of Talent and Artistry. This recital highlights the passion and creativity of SUA students through captivating performances in jazz, brass, dance, original compositions, and more.",
      category: "Event Photography",
      image: "singing.jpg",
      date: "December 6th, 2024"
    },
    {
      title: "Wyatt Balman Invitational",
      description: "The Fourth Annual Wyatt Balman Invitational–honoring the life and legacy of Thomas \"Wyatt\" Balman, at Soka University of America.",
      category: "Sports Photography",
      image: "swimming.jpg",
      date: "November 9th, 2024"
    },
    {
      title: "Horizontal New York",
      description: "Horizontal New York 🗽 - winter street photography capturing the iconic cityscape in the snow.",
      category: "Street Photography",
      image: "street_snow.jpg",
      date: "February 22nd, 2025"
    },
    {
      title: "Detailed B&W",
      description: "Detailed B&W, high contrast and highlights project (vertical).",
      category: "Art Photography",
      image: "pictures/detailed-bw.jpg",
      date: "May 3rd, 2024"
    },
    {
      title: "Getty Museum",
      description: "Getty Museum (August, 2024).",
      category: "Museum Photography",
      image: "pictures/getty-museum.jpg",
      date: "August 29th, 2024"
    },
    {
      title: "CalPac Track & Field Championship",
      description: "CalPac Track & Field Championship (March, 2024).",
      category: "Sports Photography",
      image: "pictures/track-and-field.jpg",
      date: "September 7th, 2024"
    },
    {
      title: "A Walk Under Dark and Light",
      description: "A walk under dark and light.",
      category: "Street Photography",
      image: "pictures/walk-under-dark.jpg",
      date: "June 23rd, 2024"
    }
  ];

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
  };

  return (
    <>
      <section id="portfolio" className="section">
        <h2 className="section-title fade-in">Portfolio</h2>
        
        <div className="portfolio-grid fade-in">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div 
                className="portfolio-image"
                onClick={() => handleImageClick(index)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title} in fullscreen`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(index);
                  }
                }}
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="portfolio-photo"
                  style={{ objectFit: 'cover' }}
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="portfolio-meta">
                  <span className="portfolio-tag">{item.category}</span>
                  <span className="portfolio-date">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <MediaViewer
        items={portfolioItems}
        isOpen={viewerOpen}
        onClose={handleCloseViewer}
        startIndex={selectedIndex}
      />
    </>
  );
}
