import styles from '../styles/Blogs.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

function Blog({ title, date, id }) {
  return (
    <Link className={styles.blog} to={`/blogs/${id}`}>
      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{date}</p>
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
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          date={blog.postedAt}
          id={blog.id}
        />
      ))}
    </section>
  );
}

export default Blogs;
