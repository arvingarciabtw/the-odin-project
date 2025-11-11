import styles from '../styles/AddPostForm.module.css';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';
import { api } from '../utils/api';

function AddPostForm() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState({});

  async function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post('/api/blogs', { ...post, userId: user.id });

      setPost({});
      navigate('/');
    } catch (err) {
      throw new Error(err.message);
    }
  }

  return (
    <main>
      <h1>Add Post</h1>
      <p className={styles.description}>
        Add a blog post below. Enter its title and content, then click the add
        button when finished.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required
        />
        <label htmlFor="content">Blog Post Content</label>
        <textarea
          className={styles.content}
          name="content"
          id="content"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </main>
  );
}

export default AddPostForm;
