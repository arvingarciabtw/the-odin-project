import styles from '../styles/Blogs.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function Blog({ title, id, isPublished }) {
  return (
    <div className={styles.blog}>
      <p className={styles.title}>{title}</p>
      <div className={styles.buttonsContainer}>
        <Link to={`/blogs/${id}`} className={styles.btnView}>
          View
        </Link>
        <button className={styles.btnToggle}>
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>
      </div>
    </div>
  );
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/blogs');

        if (response.ok) {
          const blogs = await response.json();
          setBlogs(blogs);
        }
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className={styles.blogs}>
      {blogs
        .map((blog) => (
          <Blog
            key={blog.id}
            title={blog.title}
            date={blog.postedAt}
            id={blog.id}
            isPublished={blog.isPublished}
          />
        ))
        .reverse()}
    </section>
  );
}

export default Blogs;
