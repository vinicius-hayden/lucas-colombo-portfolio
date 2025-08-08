export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title fade-in">Get In Touch</h2>
      <div className="contact-content fade-in">
        <div className="contact-info">
          <h3>Let&apos;s Create Something Together</h3>
          <p>
            Whether you&apos;re looking for a photographer for your next project,
            interested in commissioning artwork, or simply want to collaborate
            on creative ventures, I&apos;d love to hear from you.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:lucas@lucascolombo.com">lucas@lucascolombo.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+5511999999999">+55 11 99999-9999</a>
              </div>
            </div>
            
            <div className="contact-method">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>São Paulo, Brazil • New York, USA</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <h4>Follow My Work</h4>
            <div className="social-icons">
              <a href="https://instagram.com/lucascolombo" target="_blank" rel="noopener noreferrer">
                📷 Instagram
              </a>
              <a href="https://linkedin.com/in/lucascolombo" target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
              <a href="https://behance.net/lucascolombo" target="_blank" rel="noopener noreferrer">
                🎨 Behance
              </a>
              <a href="https://vimeo.com/lucascolombo" target="_blank" rel="noopener noreferrer">
                🎬 Vimeo
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="project">Project Type</label>
              <select id="project" name="project">
                <option value="">Select a project type</option>
                <option value="photography">Photography</option>
                <option value="film">Film/Video</option>
                <option value="art">Art Commission</option>
                <option value="commercial">Commercial Work</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
