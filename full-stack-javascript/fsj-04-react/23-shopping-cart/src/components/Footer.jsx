import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.madeBy}>
        Made by{' '}
        <a
          href="https://github.com/arvingarciabtw"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.developer}
        >
          @arvingarciabtw
        </a>
      </p>
    </footer>
  );
}

export default Footer;
