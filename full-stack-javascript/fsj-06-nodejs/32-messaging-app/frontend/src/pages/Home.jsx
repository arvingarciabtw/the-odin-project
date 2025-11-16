import { useAuth } from '../contexts/AuthContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import Chats from '../components/Chats';

function Home() {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <NavBar />
          <main>
            <Chats />
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
