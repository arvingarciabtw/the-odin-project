import { useAuth } from '../contexts/AuthContext';

function Home() {
  const { isLoggedIn, user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <p>Hello, {isLoggedIn && user ? user.firstName : 'Guest'}!</p>
    </>
  );
}

export default Home;
