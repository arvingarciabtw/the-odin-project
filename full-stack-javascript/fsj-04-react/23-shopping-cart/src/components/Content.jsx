import styles from '../styles/Content.module.css';

function Content({ type }) {
  return (
    <main className={styles.containerContent}>
      {type === 'home' ? (
        <p>Where the home page content will live</p>
      ) : type === 'shop' ? (
        <p>Where the shop page content will live</p>
      ) : (
        <p>Where the cart page content will live</p>
      )}
    </main>
  );
}

export default Content;
