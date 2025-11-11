import styles from '../styles/Comments.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

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

function Comment({ text, date, userId, id, onDelete }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/users/${userId}`,
        );

        if (response.ok) {
          const user = await response.json();
          setUser(user);
        }
      } catch (err) {
        throw new Error(err);
      }
    }

    fetchUser();
  }, [userId]);

  async function handleClick() {
    try {
      await fetch(`http://localhost:3000/api/comments/${id}/delete`, {
        method: 'POST',
      });
      onDelete(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  return (
    <div className={styles.comment}>
      <div className={styles.top}>
        <p className={styles.name}>
          {user.firstName} {user.lastName}
        </p>
        <p className={styles.date}>{formatDate(date)}</p>
      </div>
      <p className={styles.commentText}>{text}</p>
      <button className={styles.btnDelete} onClick={handleClick}>
        ×
      </button>
    </div>
  );
}

function Comments() {
  const { user } = useAuth();

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({
    commentText: '',
  });
  const { id } = useParams();

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/comments/${id}`,
        );

        if (!response.ok) {
          throw new Error(await response.json());
        }

        const comments = await response.json();
        setComments(comments);
      } catch (err) {
        throw new Error(err.message);
      }
    }

    fetchComments();
  }, [id]);

  function handleChange(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!user) return;

    const newComment = {
      ...comment,
      userId: user.id,
      commentedAt: new Date().toISOString(),
    };

    setComments([...comments, newComment]);
    setComment({ commentText: '' });

    try {
      const response = await fetch(`http://localhost:3000/api/comments/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...comment, userId: user.id }),
      });

      const data = await response.json();

      if (!response.ok) {
        setComments(comments.filter((c) => c !== newComment));
        throw new Error('Failed to post comment');
      }

      setComments([...comments, data]);
    } catch (err) {
      setComments(comments.filter((c) => c !== newComment));
      throw new Error(err.message);
    }
  }

  function handleDeleteComment(commentId) {
    setComments(comments.filter((comment) => comment.id !== commentId));
  }

  return (
    <section className={styles.commentsContainer}>
      <hr />
      <h1>Comments</h1>
      <p className={styles.description}>
        Feel free to leave a comment about this blog post. Take note that only
        authenticated users can post comments.
      </p>
      {user && (
        <form className={styles.formComment} onSubmit={handleSubmit}>
          <input
            type="text"
            id="commentText"
            name="commentText"
            placeholder="Your comment here"
            onChange={handleChange}
            value={comment.commentText}
          />
          <button type="submit">Comment</button>
        </form>
      )}
      <section className={styles.comments}>
        {comments
          .map((comment) => (
            <Comment
              key={comment.id}
              text={comment.commentText}
              date={comment.commentedAt}
              userId={comment.userId}
              id={comment.id}
              onDelete={handleDeleteComment}
            />
          ))
          .reverse()}
      </section>
    </section>
  );
}

export default Comments;
