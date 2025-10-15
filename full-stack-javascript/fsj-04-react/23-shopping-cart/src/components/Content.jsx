import styles from '../styles/Content.module.css';
import Hero from './Hero';
import Products from './Products';

function Content({ type, cartIcon }) {
  return (
    <main className={styles.containerContent}>
      {type === 'home' ? (
        <Hero />
      ) : type === 'shop' ? (
        <Products cartIcon={cartIcon} />
      ) : (
        <p>Where the cart page content will live</p>
      )}
    </main>
  );
}

export default Content;
