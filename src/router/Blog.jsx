import React, { useEffect, useState } from 'react';
import './all.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://datasite-api.onrender.com/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error("Xatolik:", err));
  }, []);

  const getEmbedUrl = (url) => {
    try {
      if (url.includes('watch?v=')) {
        return url.replace('watch?v=', 'embed/');
      } else if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1];
        return `https://www.youtube.com/embed/${id}`;
      } else if (url.includes('/embed/')) {
        return url;
      } else {
        return '';
      }
    } catch {
      return '';
    }
  };

  return (
    <div className="container blog-container">
      <h1 className='blog_span'>Bloglar sahifasi</h1>
      <div className="blog-grid">
        {blogs.map((item, index) => {
          const embedUrl = getEmbedUrl(item.videoUrl);
          return (
            <div className="blog-card" key={index}>
                <iframe
                //   width="50%"
                //   height="100"
                  src={embedUrl}
                  title="YouTube video"
                  frameBorder="0"
                  allowFullScreen
                  ></iframe>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;