import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <>
      <footer className={styles.footerApp}>
        <p>
          Made by{' '}
          <a
            className={styles.developer}
            href="https://github.com/arvingarciabtw"
            target="_blank"
            rel="noopener noreferrer"
          >
            @arvingarciabtw
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
