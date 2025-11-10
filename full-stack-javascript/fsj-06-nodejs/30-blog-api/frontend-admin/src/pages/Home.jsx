import { useAuth } from '../contexts/AuthContext.jsx';
import LoginForm from '../components/LoginForm.jsx';

function Home() {
  const { user } = useAuth();

  return (
    <>
      <main>{user ? <p>there is a user logged in.</p> : <LoginForm />}</main>
    </>
  );
}

export default Home;
