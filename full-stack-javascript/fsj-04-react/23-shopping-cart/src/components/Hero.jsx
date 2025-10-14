import styles from '../styles/Hero.module.css';
import { Link } from 'react-router';

function Hero() {
  return (
    <section className={styles.sectionHero}>
      <h1 className={styles.headingHero}>Your next great read awaits</h1>
      <p className={styles.descriptionHero}>
        Discover curated collections of books across every genre. From timeless
        classics to contemporary bestsellers, find your perfect story and get it
        delivered right to your door.
      </p>
      <Link to="/shop">
        <button className={styles.buttonHero}>Shop Now</button>
      </Link>
    </section>
  );
}

export default Hero;
