import { useContext } from 'react';
import { AppContext } from '../App';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';

function Shop() {
  const { cartQuantity, setCartQuantity, products, error, isLoading } =
    useContext(AppContext);

  return (
    <>
      <NavBar cartQuantity={cartQuantity} />
      <Content
        type="shop"
        cartIcon={{
          cartQuantity: cartQuantity,
          setCartQuantity: setCartQuantity,
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
