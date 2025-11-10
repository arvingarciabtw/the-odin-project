import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Comments from '../components/Comments.jsx';

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

function BlogPost() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/blogs/${id}`);

        if (response.ok) {
          const blog = await response.json();
          setBlog(blog);
        }
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{formatDate(blog.postedAt)}</p>
      <p>{blog.content}</p>
      <Comments />
    </main>
  );
}

export default BlogPost;
