import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '/logo_optimized.webp';

function NavBar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <>
      <header className={styles.headerApp}>
        <nav>
          <Link to="/">
            <img src={logo} alt="Arvin Garcia logo" />
          </Link>
          <div>
            <Link to="/profile">Profile</Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className={styles.btnLogout}>
                Log Out
              </button>
            ) : (
              <Link to="/">Log In</Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
