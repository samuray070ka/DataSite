import React, { useEffect, useState } from 'react';
import './all.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://datasite-api.onrender.com/api/blogs')
      .then(res => {
        if (!res.ok) {
          throw new Error("Serverdan to'g'ri javob kelmadi");
        }
        return res.json();
      })
      .then(data => setBlogs(data))
      .catch(err => {
        console.error("Xatolik:", err);
        setError("Ma'lumotlarni yuklab bo'lmadi.");
      });
  }, []);

  const getEmbedUrl = (url) => {
    try {
      if (url.includes('watch?v=')) {
        return url.replace('watch?v=', 'embed/');
      } else if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1];
        return `https://www.youtube.com/embed/${id}`;
      } else if (url.includes('/shorts/')) {
        const id = url.split('/shorts/')[1];
        return `https://www.youtube.com/embed/${id}`;
      } else {
        return url;
      }
    } catch {
      return '';
    }
  };

  return (
    <div className="container blog-container">
      <h1 className="blog_span">Bloglar sahifasi</h1>

      {error ? (
        <p className="error-text">{error}</p>
      ) : (
        <div className="blog-grid">
          {blogs.map((item) => {
            const embedUrl = getEmbedUrl(item.videoUrl);
            return (
              <div className="blog-card" key={item.id || item._id || item.title}>
                {embedUrl && (
                  <iframe
                    width="100%"
                    height="300"
                    src={embedUrl}
                    title={item.title || 'YouTube video'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Blog;