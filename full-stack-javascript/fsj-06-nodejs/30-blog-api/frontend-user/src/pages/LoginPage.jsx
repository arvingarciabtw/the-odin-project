import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <>
      <NavBar />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
