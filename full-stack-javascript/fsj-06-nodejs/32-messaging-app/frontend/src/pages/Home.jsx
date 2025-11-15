import { useAuth } from '../contexts/AuthContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

function Home() {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <NavBar />
          <main>
            <p>At home page...</p>
            <p>{user.first_name}</p>
            <p>{user.username}</p>
          </main>
          <Footer />
        </>
      ) : (
        <main
          style={{
            width: '100%',
            height: '100svh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoginForm />
        </main>
      )}
    </>
  );
}

export default Home;
