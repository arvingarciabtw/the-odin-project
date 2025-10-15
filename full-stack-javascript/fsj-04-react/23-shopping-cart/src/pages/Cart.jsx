import { useContext } from 'react';
import { AppContext } from '../App';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';

function Cart() {
  const { cartQuantity, setCartQuantity } = useContext(AppContext);

  return (
    <>
      <NavBar cartQuantity={cartQuantity} />
      <Content
        type="cart"
        cartIcon={{
          cartQuantity: cartQuantity,
          setCartQuantity: setCartQuantity,
        }}
      />
      <Footer />
    </>
  );
}

export default Cart;
