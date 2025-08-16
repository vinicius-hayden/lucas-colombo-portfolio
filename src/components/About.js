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
          </p>
          <div className="about-skills">
            <h4>Specialties</h4>
            <ul>
              <li>Documentary Photography</li>
              <li>Portrait Photography</li>
              <li>Short Film Production</li>
              <li>Visual Storytelling</li>
            </ul>
          </div>
          
          <div className="about-education">
            <h4>Education</h4>
            <div className="education-item">
              <div className="education-header">
                <div className="education-institution">
                  <h5>Soka University of America</h5>
                  <p className="education-location">Aliso Viejo, California</p>
                </div>
                <div className="education-logo">
                  <Image
                    src="/images/logos/soka_university_logo.png"
                    alt="Soka University of America Logo"
                    width={80}
                    height={80}
                    className="school-logo"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="education-details">
                <p className="education-degree">Bachelor of Arts</p>
                <p className="education-focus">Liberal Arts with focus on Humanities</p>
                <p className="education-year">Class of 2027</p>
              </div>
            </div>
            <div className="education-item">
              <div className="education-header">
                <div className="education-institution">
                  <h5>Colegio Soka do Brasil</h5>
                  <p className="education-location">São Paulo, Brazil</p>
                </div>
                <div className="education-logo">
                  <Image
                    src="/images/logos/colegio-soka.png"
                    alt="Colegio Soka do Brasil Logo"
                    width={80}
                    height={80}
                    className="school-logo"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="education-details">
                <p className="education-degree">High School with International Baccalaureate Diploma</p>
                <p className="education-focus">IB Diploma Program with Outstanding GPA</p>
                <p className="education-year">Class of 2021</p>
              </div>
            </div>
            <div className="education-note">
              <p>
                Lucas&apos;s educational journey began at Colegio Soka do Brasil, where he excelled in the International 
                Baccalaureate program, developing critical thinking skills and a global perspective that would later 
                influence his artistic vision. At Soka University of America, he continued his interdisciplinary 
                approach to visual storytelling, combining traditional artistic techniques with contemporary digital media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
