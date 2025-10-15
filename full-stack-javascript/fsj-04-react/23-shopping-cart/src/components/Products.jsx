import styles from '../styles/Products.module.css';
import { useState, useEffect } from 'react';

function Product({ product }) {
  const [quantity, setQuantity] = useState(0);

  function handleClick(type) {
    type === 'increment'
      ? setQuantity((quantity) => quantity + 1)
      : quantity === 0
        ? setQuantity(0)
        : setQuantity(quantity - 1);
  }

  function handleChange(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <div className={styles.containerProduct}>
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.imgProduct}
      />
      <div className={styles.containerProductDetails}>
        <h3 className={styles.headingProduct}>{product.title}</h3>
        <div className={styles.bottom}>
          <p>${product.price}</p>
          <p>Rating: {product.rating}/5</p>
        </div>
        <div className={styles.containerInteractions}>
          <div className={styles.containerQuantity}>
            <button
              className={styles.btnDecrementQuantity}
              onClick={() => handleClick('decrement')}
            >
              -
            </button>
            <input
              type="text"
              className={styles.inputQuantity}
              value={quantity}
              onChange={handleChange}
            />
            <button
              className={styles.btnIncrementQuantity}
              onClick={() => handleClick('increment')}
            >
              +
            </button>
          </div>
          <button className={styles.btnAddCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0', {
          mode: 'cors',
        });

        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }

        const data = await response.json();
        const unFilteredProducts = data.products;
        const techProducts = unFilteredProducts.filter(
          (product) =>
            product.category === 'laptops' ||
            product.category === 'smartphones' ||
            product.category === 'tablets',
        );

        setProducts(techProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className={styles.sectionProducts}>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </>
      )}
    </section>
  );
}

export default Products;
