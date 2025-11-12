import styles from '../styles/NavBar.module.css';
import logo from '../assets/images/logo_optimized.webp';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <header className={styles.headerApp}>
        <nav>
          <Link to="/">
            <img src={logo} alt="Arvin Garcia logo" />
          </Link>
          <div>
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
