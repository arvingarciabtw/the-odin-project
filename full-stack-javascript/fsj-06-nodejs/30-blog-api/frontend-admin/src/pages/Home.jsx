import styles from '../styles/Home.module.css';
import LoginForm from '../components/LoginForm';
import Blogs from '../components/Blogs';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router';

function Home() {
  const { user } = useAuth();

  return (
    <>
      <main>
        {user ? (
          <>
            <h1>Blog Posts</h1>
            <p className={styles.description}>
              Take a look at all of the blog posts below. You can choose to
              publish or unpublish them.
            </p>
            <Blogs />
            <Link to="/create-post">
              <button className={styles.btnAddPost}>+</button>
            </Link>
          </>
        ) : (
          <LoginForm />
        )}
      </main>
    </>
  );
}

export default Home;
