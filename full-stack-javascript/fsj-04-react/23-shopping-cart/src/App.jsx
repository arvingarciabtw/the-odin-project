import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [cartProducts, setCartProducts] = useState([]);

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
      <NavBar cart={{ cartProducts, setCartProducts }} />
      <Outlet
        context={[cartProducts, setCartProducts, products, error, isLoading]}
      />
      <Footer />
    </>
  );
}

export default App;
