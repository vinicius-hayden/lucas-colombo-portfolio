"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function MediaViewer({ items, isOpen, onClose, startIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrevious]);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="media-viewer-overlay" onClick={onClose}>
      <div className="media-viewer-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="media-viewer-close" onClick={onClose} aria-label="Close viewer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button 
              className="media-viewer-nav media-viewer-prev" 
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <button 
              className="media-viewer-nav media-viewer-next" 
              onClick={goToNext}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </>
        )}

        {/* Main Image */}
        <div className="media-viewer-image-container">
          <Image
            src={`/images/${currentItem.image}`}
            alt={currentItem.title}
            width={1200}
            height={800}
            className="media-viewer-image"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Image Info */}
        <div className="media-viewer-info">
          <h3 className="media-viewer-title">{currentItem.title}</h3>
          <p className="media-viewer-description">{currentItem.description}</p>
          <div className="media-viewer-meta">
            <span className="media-viewer-category">{currentItem.category}</span>
            <span className="media-viewer-date">{currentItem.date}</span>
            <span className="media-viewer-counter">
              {currentIndex + 1} of {items.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {items.length > 1 && (
          <div className="media-viewer-thumbnails">
            {items.map((item, index) => (
              <button
                key={index}
                className={`media-viewer-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.title}
                  width={60}
                  height={45}
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
