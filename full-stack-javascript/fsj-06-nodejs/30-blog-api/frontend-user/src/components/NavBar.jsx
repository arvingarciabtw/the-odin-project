import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <>
      <header className={styles.headerApp}>
        <nav>
          <a href="/">
            <img
              src="../src/assets/images/logo_optimized.webp"
              alt="Arvin Garcia logo"
            />
          </a>
          <div>
            <a href="/log-in">Log In</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
