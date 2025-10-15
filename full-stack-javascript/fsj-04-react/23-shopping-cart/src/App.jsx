import { Outlet } from 'react-router';
import { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartIconArray, setCartIconArray] = useState([]);

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
    <AppContext.Provider
      value={{
        cartQuantity,
        setCartQuantity,
        cartIconArray,
        setCartIconArray,
        products,
        error,
        isLoading,
      }}
    >
      <Outlet />
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
