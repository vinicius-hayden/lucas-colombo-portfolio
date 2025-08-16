"use client";

import Image from "next/image";

export default function Videos() {
  const videoItems = [
    {
      title: "CITY WALK",
      description: "During the pandemic, one of Lucas' goals was to become a rap music video filmmaker. And so he did. City Walk is Lucas' interpretation of the song \"Besteiras\" by Rio de Janeiro rapper, Leal. Filmed during the 2023 Latin Identity in NY Learning Cluster.",
      category: "Music Video",
      date: "2023",
      thumbnail: "city_walk.png",
      link: "https://drive.google.com/file/d/1IiyD06mmIa5ftaMUK1dEYEZcQTq3cIul/preview"
    },
    {
      title: "SMALL TALK", 
      description: "Sometimes all the encouragement you need is within. Small Talk is a short film that reminds us all that sometimes, wisdom can be found in our own words. And we just need someone who can remind us of that.",
      category: "Short Film",
      date: "2024",
      thumbnail: "smalltalk.png",
      link: "https://drive.google.com/file/d/1mjTgsvok6-ZAUNQc7PxVj_ckDSxbi8IE/preview"
    },
    {
      title: "UNIVERSE", 
      description: "Each person is the size of a universe, carrying stories, struggles, and victories that sometimes, you might not ever find out about.",
      category: "Documentary",
      date: "2023",
      thumbnail: "universe.png",
      link: "https://drive.google.com/file/d/1cseEyHUEigzWpMtUXBsa1v_DWJ0xwYKq/preview"
    }
  ];

  return (
    <section id="videos" className="section">
      <h2 className="section-title fade-in">Filmmaking</h2>
      <div className="videos-grid fade-in">
        {videoItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="video-card"
          >
            <div className="video-thumbnail">
              <Image
                src={`/images/thumbnails/${item.thumbnail}`}
                alt={item.title}
                width={400}
                height={250}
                className="video-thumbnail-image"
                style={{ objectFit: 'cover' }}
              />
              <div className="video-play-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </div>
              <div className="video-overlay">
                <span>Click to Watch</span>
              </div>
            </div>
            <div className="video-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="video-meta">
                <span className="video-tag">{item.category}</span>
                <span className="video-date">{item.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
