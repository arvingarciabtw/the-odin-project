import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router';

function NavBar() {
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
            <Link to="/log-in">Log In</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
