import styles from '../styles/NavBar.module.css';
import { Link } from 'react-router';

function NavBar() {
  return (
    <header className={styles.headerApp}>
      <div className={styles.wrapper}>
        <Link to="/">
          <h1 className="heading-app">Inkwell</h1>
        </Link>
        <nav className={styles.containerNavLinks}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
