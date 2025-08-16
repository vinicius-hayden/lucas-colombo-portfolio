"use client";

import Image from "next/image";
import { useState } from "react";
import MediaViewer from "./MediaViewer";

export default function Instagram() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rememberingPhotos = [
    { 
      id: 1, 
      title: "Capturing Life's Beautiful Moments",
      image: "_O9A5266.jpg",
      description: "Photo by Philips Ametsikor",
      category: "Portrait Photography",
      date: "2024"
    },
    { 
      id: 2, 
      title: "Digital Media Team",
      image: "050724_DIGITALMEDIATEAM-WP-03.JPG",
      description: "Digital Media Team collaboration",
      category: "Event Photography",
      date: "May 7th, 2024"
    },
    { 
      id: 3, 
      title: "emBRASAando Event",
      image: "111524_emBRASAando-KN-18.jpg",
      description: "Photo by Sakura Kato",
      category: "Event Photography",
      date: "November 15th, 2024"
    },
    { 
      id: 4, 
      title: "Disability Awareness",
      image: "120624_DISABILITY-AWARENESS -WP-01.JPG",
      description: "Disability Awareness advocacy",
      category: "Documentary Photography",
      date: "December 6th, 2024"
    },
    { 
      id: 5, 
      title: "Portrait with Ayano Tanaka",
      image: "20230809__Q4A0014_Ayano Tanaka.jpg",
      description: "Portrait session with Ayano Tanaka",
      category: "Portrait Photography",
      date: "August 9th, 2023"
    },
    { 
      id: 6, 
      title: "Artistic Portrait - Sakura Kato",
      image: "20231201__37A9104_Sakura Kato.jpg",
      description: "Artistic portrait of Sakura Kato",
      category: "Portrait Photography",
      date: "December 1st, 2023"
    },
    { 
      id: 7, 
      title: "Creative Session - Sakura Kato",
      image: "20240209__Q4A5797_Sakura Kato.jpg",
      description: "Creative photography with Sakura Kato",
      category: "Creative Photography",
      date: "February 9th, 2024"
    },
    { 
      id: 8, 
      title: "Portrait with Jun Sawada",
      image: "20240303__Q4A7470_Jun Sawada.jpg",
      description: "Portrait session with Jun Sawada",
      category: "Portrait Photography",
      date: "March 3rd, 2024"
    },
    { 
      id: 9, 
      title: "Collaboration with Kevin Afful",
      image: "20240703__O9A7899_Kevin Afful.jpg",
      description: "Collaboration with Kevin Afful",
      category: "Collaborative Photography",
      date: "July 3rd, 2024"
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
      <section id="instagram" className="section">
        <h2 className="section-title fade-in">Remembering Lucas</h2>
        <div className="instagram-content fade-in">
          <div className="instagram-header">
            <div className="instagram-profile">
              <div className="instagram-avatar">📷</div>
              <div className="instagram-info">
                <h3>@colomboframes</h3>
                <p>Visual Artist • Photographer • Filmmaker</p>
                <p className="memorial-text">A tribute to a passionate artist whose work captured the beauty of life</p>
                <div className="instagram-links">
                  <a 
                    href="https://www.instagram.com/colomboframes/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @colomboframes
                  </a>
                  <a 
                    href="https://www.instagram.com/lucas.colomb/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @lucas.colomb
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="instagram-grid">
            {rememberingPhotos.map((photo, index) => (
              <div 
                key={photo.id} 
                className="instagram-post"
                onClick={() => handleImageClick(index)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                aria-label={`View ${photo.title} in fullscreen`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleImageClick(index);
                  }
                }}
              >
                <div className="instagram-post-image">
                  <Image
                    src={`/images/remembering/${photo.image}`}
                    alt={photo.description}
                    width={300}
                    height={300}
                    className="remembering-photo"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="instagram-post-overlay">
                  <div className="overlay-content">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                    <span>View Fullscreen</span>
                  </div>
                  <p>{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="instagram-footer">
            <p>His artistic legacy lives on through these captured moments and memories</p>
          </div>
        </div>
      </section>
      
      <MediaViewer
        items={rememberingPhotos.map(photo => ({
          title: photo.title,
          description: photo.description,
          category: photo.category,
          image: `remembering/${photo.image}`,
          date: photo.date
        }))}
        isOpen={viewerOpen}
        onClose={handleCloseViewer}
        startIndex={selectedIndex}
      />
    </>
  );
}
