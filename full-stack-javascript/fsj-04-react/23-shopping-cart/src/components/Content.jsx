import styles from '../styles/Content.module.css';
import Hero from './Hero';
import Products from './Products';
import CartProducts from './CartProducts';

function Content({ type, cart, data }) {
  return (
    <main className={styles.containerContent}>
      {type === 'home' ? (
        <Hero />
      ) : type === 'shop' ? (
        <Products cart={cart} data={data} />
      ) : (
        <CartProducts cart={cart} />
      )}
    </main>
  );
}

export default Content;
