import Image from "next/image";

export default function Portfolio() {
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
    }
  ];

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title fade-in">Portfolio</h2>
      <div className="portfolio-grid fade-in">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <div className="portfolio-image">
              <Image
                src={`/images/${item.image}`}
                alt={item.title}
                width={400}
                height={300}
                className="portfolio-photo"
                style={{ objectFit: 'cover' }}
              />
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
  );
}
