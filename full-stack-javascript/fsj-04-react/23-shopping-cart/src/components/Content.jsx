import styles from '../styles/Content.module.css';
import Hero from './Hero';

function Content({ type }) {
  return (
    <main className={styles.containerContent}>
      {type === 'home' ? (
        <Hero />
      ) : type === 'shop' ? (
        <p>Where the shop page content will live</p>
      ) : (
        <p>Where the cart page content will live</p>
      )}
    </main>
  );
}

export default Content;
