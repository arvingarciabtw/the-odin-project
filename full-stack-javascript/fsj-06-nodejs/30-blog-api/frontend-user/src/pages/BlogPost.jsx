import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Comments from '../components/Comments.jsx';

function BlogPost() {
  const { isLoggedIn, user } = useAuth();
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
      <p>{blog.postedAt}</p>
      <p>{blog.content}</p>
      <Comments />
    </main>
  );
}

export default BlogPost;
