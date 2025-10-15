import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';

function Shop() {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <NavBar cartQuantity={cartQuantity} />
      <Content
        type="shop"
        cartIcon={{
          cartQuantity: cartQuantity,
          setCartQuantity: setCartQuantity,
        }}
      />
      <Footer />
    </>
  );
}

export default Shop;
