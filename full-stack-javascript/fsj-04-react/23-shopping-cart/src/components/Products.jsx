import { useState, useEffect } from 'react';

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
    <>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <p key={product.id}>{product.title}</p>
          ))}
        </ul>
      )}
    </>
  );
}

export default Products;
