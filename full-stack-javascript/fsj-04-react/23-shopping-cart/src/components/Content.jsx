import styles from '../styles/Content.module.css';
import Hero from './Hero';
import Products from './Products';
import CartProducts from './CartProducts';

function Content({ type }) {
  return (
    <main className={styles.containerContent}>
      {type === 'home' ? (
        <Hero />
      ) : type === 'shop' ? (
        <Products />
      ) : (
        <CartProducts />
      )}
    </main>
  );
}

export default Content;
