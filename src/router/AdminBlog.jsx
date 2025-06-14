import React, { useState } from 'react';
import axios from 'axios';
import './admin.css';

function AdminBlog() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://datasite-api.onrender.com/api/blogs', formData);
      alert('Blog muvaffaqiyatli qo‘shildi!');
      setFormData({ title: '', description: '', videoUrl: '' });
    } catch (error) {
      alert('Xatolik yuz berdi: ' + error.message);
    }
  };

  return (
    <div className='admin'>
      <div className="admin-container">
        <h2>Blog qo‘shish</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="title"
            placeholder="Sarlavha"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Tavsif"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            name="videoUrl"
            placeholder="YouTube video URL"
            value={formData.videoUrl}
            onChange={handleChange}
            required
          />
          <button type="submit">Qo‘shish</button>
        </form>
      </div>
    </div>
  );
}

export default AdminBlog;