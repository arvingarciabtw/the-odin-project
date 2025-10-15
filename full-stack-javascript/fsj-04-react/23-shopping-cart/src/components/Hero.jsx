import styles from '../styles/Hero.module.css';
import { Link } from 'react-router';

function Hero() {
  return (
    <section className={styles.sectionHero}>
      <h1 className={styles.headingHero}>Find your perfect device</h1>
      <p className={styles.descriptionHero}>
        Explore our selection of laptops, phones, and tablets designed to fit
        your lifestyle. Browse through a variety of products, check prices and
        ratings, and find exactly what you need for work, play, or everyday use.
      </p>
      <Link to="/shop">
        <button className={styles.buttonHero}>Shop Now</button>
      </Link>
    </section>
  );
}

export default Hero;
