import { useContext } from 'react';
import { AppContext } from '../App';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';

function Shop() {
  const { cartProducts, setCartProducts, products, error, isLoading } =
    useContext(AppContext);

  return (
    <>
      <NavBar
        cart={{
          cartProducts,
          setCartProducts,
        }}
      />
      <Content
        type="shop"
        cart={{
          cartProducts: cartProducts,
          setCartProducts: setCartProducts,
        }}
        data={{
          products: products,
          error: error,
          isLoading: isLoading,
        }}
      />
      <Footer />
    </>
  );
}

export default Shop;
