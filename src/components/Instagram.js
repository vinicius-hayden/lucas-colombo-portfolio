export default function Instagram() {
  const instagramPosts = [
    { id: 1, description: "Urban exploration in downtown" },
    { id: 2, description: "Golden hour portrait session" },
    { id: 3, description: "Behind the scenes - new project" },
    { id: 4, description: "Street photography collection" },
    { id: 5, description: "Film photography experiments" },
    { id: 6, description: "Workshop with emerging artists" }
  ];

  return (
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
            </div>
          </div>
        </div>
        
        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <div key={post.id} className="instagram-post">
              <div className="instagram-post-image">
                📸 Post {post.id}
              </div>
              <div className="instagram-post-overlay">
                <p>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="instagram-footer">
          <p>His artistic legacy lives on through these captured moments and memories</p>
        </div>
      </div>
    </section>
  );
}
