export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Lucas Colombo</h3>
          <p>Visual Artist • Photographer • Filmmaker</p>
        </div>
        
        <div className="footer-center">
          <div className="footer-nav">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
        
        <div className="footer-right">
          <div className="footer-social">
            <a href="https://instagram.com/lucascolombo" target="_blank" rel="noopener noreferrer">
              📷
            </a>
            <a href="https://linkedin.com/in/lucascolombo" target="_blank" rel="noopener noreferrer">
              💼
            </a>
            <a href="https://behance.net/lucascolombo" target="_blank" rel="noopener noreferrer">
              🎨
            </a>
            <a href="https://vimeo.com/lucascolombo" target="_blank" rel="noopener noreferrer">
              🎬
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Lucas Colombo. In loving memory.</p>
        <p>Celebrating a life dedicated to visual storytelling and artistic expression.</p>
      </div>
    </footer>
  );
}
