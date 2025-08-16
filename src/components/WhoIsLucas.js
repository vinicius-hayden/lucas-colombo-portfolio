import Image from "next/image";

export default function WhoIsLucas() {
  const friendMemories = [
    {
      title: "The Adventurous Spirit",
      description: "Lucas was always the one to suggest spontaneous road trips, late-night photography sessions, and exploring hidden gems around the city. His infectious enthusiasm made every ordinary moment feel like an adventure.",
      memory: "Always ready for the next adventure"
    },
    {
      title: "The Loyal Companion",
      description: "Whether you needed someone to celebrate your victories or support you through challenges, Lucas was there. His genuine care for his friends created bonds that transcended distance and time.",
      memory: "A friend you could count on"
    },
    {
      title: "The Creative Collaborator",
      description: "Lucas loved bringing people together for creative projects. He had a gift for seeing the unique talents in each person and inspiring collaborative art that was greater than the sum of its parts.",
      memory: "Bringing out the best in everyone"
    }
  ];

  const familyMoments = [
    {
      title: "The Beloved Son",
      description: "Lucas brought joy and pride to his family with his artistic achievements and kind heart. His passion for visual storytelling was nurtured by a family that believed in his dreams from the very beginning.",
      memory: "Our shining star"
    },
    {
      title: "The Caring Brother",
      description: "Always protective and supportive, Lucas was the kind of brother who celebrated family milestones with genuine excitement and created lasting memories through his photography.",
      memory: "Capturing our precious moments"
    },
    {
      title: "The Cultural Bridge",
      description: "Growing up between Brazil and California, Lucas became the bridge connecting different cultures within his family, sharing stories and perspectives that enriched everyone's worldview.",
      memory: "Connecting worlds with love"
    }
  ];

  const artisticJourney = [
    {
      title: "The Visionary",
      description: "Lucas saw beauty where others saw ordinary. His unique perspective transformed everyday scenes into compelling visual narratives that spoke to the human experience.",
      memory: "Seeing the extraordinary in everything"
    },
    {
      title: "The Storyteller",
      description: "Every photograph, every frame of film was a story waiting to be told. Lucas had an innate ability to capture emotion and meaning in a single moment.",
      memory: "Stories frozen in time"
    },
    {
      title: "The Innovator",
      description: "Never content with conventional approaches, Lucas constantly pushed the boundaries of his craft, experimenting with new techniques and technologies to express his artistic vision.",
      memory: "Always pushing creative boundaries"
    }
  ];

  return (
    <main>
      <section id="who-is-lucas" className="section who-is-lucas-section">
        <h1 className="section-title fade-in">Who is Lucas?</h1>
        <div className="who-intro fade-in">
          <p>
            Lucas Colombo was many things to many people - a devoted friend, a loving family member, 
            and a passionate artist. Here are the stories that capture the essence of who he was and 
            the impact he had on all our lives.
          </p>
        </div>

      {/* Lucas as a Friend */}
      <div className="lucas-category fade-in">
        <div className="category-header">
          <h3 className="category-title">Lucas as a Friend</h3>
          <p className="category-subtitle">The companion who made life brighter</p>
        </div>
        <div className="memories-grid">
          {friendMemories.map((memory, index) => (
            <div key={index} className="memory-card">
              <div className="memory-icon">👥</div>
              <h4>{memory.title}</h4>
              <p>{memory.description}</p>
              <div className="memory-quote">&ldquo;{memory.memory}&rdquo;</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lucas as Family */}
      <div className="lucas-category fade-in">
        <div className="category-header">
          <h3 className="category-title">Lucas as Family</h3>
          <p className="category-subtitle">The heart of our family</p>
        </div>
        <div className="memories-grid">
          {familyMoments.map((moment, index) => (
            <div key={index} className="memory-card">
              <div className="memory-icon">❤️</div>
              <h4>{moment.title}</h4>
              <p>{moment.description}</p>
              <div className="memory-quote">&ldquo;{moment.memory}&rdquo;</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lucas as an Artist */}
      <div className="lucas-category fade-in">
        <div className="category-header">
          <h3 className="category-title">Lucas as an Artist</h3>
          <p className="category-subtitle">The creative soul who captured beauty</p>
        </div>
        <div className="memories-grid">
          {artisticJourney.map((journey, index) => (
            <div key={index} className="memory-card">
              <div className="memory-icon">🎨</div>
              <h4>{journey.title}</h4>
              <p>{journey.description}</p>
              <div className="memory-quote">&ldquo;{journey.memory}&rdquo;</div>
            </div>
          ))}
        </div>
      </div>

      {/* Memorial Quote */}
      <div className="memorial-conclusion fade-in">
        <div className="conclusion-content">
          <h3>A Life Well Lived</h3>
          <p>
            Lucas touched our lives in countless ways - through his friendship, his love for family, 
            and his artistic vision. While we mourn his passing, we celebrate the beautiful legacy 
            he left behind and the ways he continues to inspire us every day.
          </p>
          <div className="memorial-signature">
            <p>— Forever in our hearts —</p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
