import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

function AdminBlog() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoUrl: ''
  });

  const [blogs, setBlogs] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', formData);
      alert('Blog muvaffaqiyatli qo‘shildi!');
      setFormData({ title: '', description: '', videoUrl: '' });
      fetchBlogs();
    } catch (error) {
      alert('Xatolik yuz berdi: ' + error.message);
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(res.data);
    } catch (error) {
      console.log('Xatolik:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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