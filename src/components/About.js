import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="section">
      <h2 className="section-title fade-in">About</h2>
      <div className="about-content fade-in">
        <div className="about-image">
          <div className="profile-image-container">
            <Image 
              src="/images/lucas-profile.jpg" 
              alt="Lucas Colombo - Visual Artist" 
              className="profile-image"
              width={400}
              height={400}
              priority={false}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              style={{ 
                display: imageError ? 'none' : 'block'
              }}
            />
            {(imageError || !imageLoaded) && (
              <div className="profile-placeholder">
                👤 Artist Photo
              </div>
            )}
          </div>
        </div>
        <div className="about-text">
          <h3>Creative Vision</h3>
          <p>
            Lucas Colombo was a multidisciplinary visual artist whose work spanned
            photography, film, and contemporary art. With a keen eye for capturing
            the extraordinary in the ordinary, Lucas created compelling visual
            narratives that explored themes of human connection, urban landscapes,
            and the intersection of nature and technology.
          </p>
          <p>
            Based between São Paulo and Southern California, Lucas developed a distinctive
            aesthetic that blended documentary photography with artistic expression.
            His work has been featured in international galleries and publications,
            earning recognition for its unique perspective on modern life.
          </p>
          <div className="about-skills">
            <h4>Specialties</h4>
            <ul>
              <li>Documentary Photography</li>
              <li>Portrait Photography</li>
              <li>Short Film Production</li>
              <li>Visual Storytelling</li>
              <li>Commercial Photography</li>
            </ul>
          </div>
          
          <div className="about-education">
            <h4>Education</h4>
            <div className="education-item">
              <div className="education-institution">
                <h5>Soka University of America</h5>
                <p className="education-location">Aliso Viejo, California</p>
              </div>
              <div className="education-details">
                <p className="education-degree">Bachelor of Arts</p>
                <p className="education-focus">Liberal Arts with focus on Visual Arts & Media Studies</p>
                <p className="education-year">Class of 2027</p>
              </div>
            </div>
            <div className="education-note">
              <p>
                At Soka University, Lucas developed his interdisciplinary approach to visual storytelling, 
                combining traditional artistic techniques with contemporary digital media. The university&apos;s 
                emphasis on global citizenship and creative expression deeply influenced his artistic vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
