import styles from '../styles/Products.module.css';
import { useState, useEffect } from 'react';

function Product({ product }) {
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

  console.log(products[0]);

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
