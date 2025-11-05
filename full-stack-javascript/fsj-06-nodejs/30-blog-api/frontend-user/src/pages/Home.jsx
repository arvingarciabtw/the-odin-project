import styles from '../styles/Home.module.css';
import { useAuth } from '../contexts/AuthContext';
import Blogs from '../components/Blogs.jsx';

function Home() {
  const { isLoggedIn, user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <main>
        <h1>{isLoggedIn && user ? `Hello, ${user.firstName}` : 'Hello'}!</h1>
        <p className={styles.description}>
          Take a look at the most recent blog posts below.
        </p>
        <Blogs />
      </main>
    </>
  );
}

export default Home;
