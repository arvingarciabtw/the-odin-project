import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

function NavBar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate('/log-in');
  }

  return (
    <>
      <header className={styles.headerApp}>
        <nav>
          <Link to="/">
            <img
              src="../src/assets/images/logo_optimized.webp"
              alt="Arvin Garcia logo"
            />
          </Link>
          <div>
            {isLoggedIn ? (
              <button onClick={handleLogout} className={styles.btnLogout}>
                Log Out
              </button>
            ) : (
              <Link to="/log-in">Log In</Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
