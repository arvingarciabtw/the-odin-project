import { useContext } from 'react';
import { AppContext } from '../App';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';

function Cart() {
  const { cartProducts, setCartProducts } = useContext(AppContext);

  return (
    <>
      <NavBar
        cart={{
          cartProducts,
          setCartProducts,
        }}
      />
      <Content
        type="cart"
        cart={{
          cartProducts: cartProducts,
          setCartProducts: setCartProducts,
        }}
      />
      <Footer />
    </>
  );
}

export default Cart;
