import styles from '../styles/Blogs.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function formatDate(dateString) {
  if (!dateString) return '';
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(new Date(dateString));
}

function Blog({ title, date, id }) {
  return (
    <Link className={styles.blog} to={`/blogs/${id}`}>
      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{formatDate(date)}</p>
    </Link>
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
        .map(
          (blog) =>
            blog.isPublished && (
              <Blog
                key={blog.id}
                title={blog.title}
                date={blog.postedAt}
                id={blog.id}
              />
            ),
        )
        .reverse()}
    </section>
  );
}

export default Blogs;
