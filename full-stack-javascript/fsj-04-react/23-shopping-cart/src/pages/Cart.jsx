import { useContext } from 'react';
import { AppContext } from '../App';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';

function Cart() {
  const { cartQuantity, setCartQuantity, cartProducts, setCartProducts } =
    useContext(AppContext);

  return (
    <>
      <NavBar cartQuantity={cartQuantity} />
      <Content
        type="cart"
        cart={{
          cartQuantity: cartQuantity,
          setCartQuantity: setCartQuantity,
          cartProducts: cartProducts,
          setCartProducts: setCartProducts,
        }}
      />
      <Footer />
    </>
  );
}

export default Cart;
