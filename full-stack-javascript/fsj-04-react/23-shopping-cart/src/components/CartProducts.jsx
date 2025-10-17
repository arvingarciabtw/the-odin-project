import styles from '../styles/CartProducts.module.css';
import { useState } from 'react';
import Modal from './Modal';
import { useOutletContext } from 'react-router';

function CartProduct({ cartProduct, cartProducts, setCartProducts }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function handleClick(type) {
    if (type === 'increment') {
      const updatedCartProducts = cartProducts.map((item) =>
        item.product.id === cartProduct.product.id
          ? { ...item, count: item.count + 1 }
          : item,
      );

      setCartProducts(updatedCartProducts);
    } else if (type === 'decrement') {
      if (cartProduct.count !== 1) {
        const updatedCartProducts = cartProducts.map((item) =>
          item.product.id === cartProduct.product.id
            ? { ...item, count: item.count - 1 }
            : item,
        );

        setCartProducts(updatedCartProducts);
      }
    }
  }

  function handleChange(e) {
    const re = /^[1-9][0-9]*$|^$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      const updatedCartProducts = cartProducts.map((item) =>
        item.product.id === cartProduct.product.id
          ? {
              ...item,
              count: e.target.value === '' ? '' : Number(e.target.value),
            }
          : item,
      );

      setCartProducts(updatedCartProducts);
    }
  }

  function handleBlur() {
    if (cartProduct.count === '') {
      const updatedCartProducts = cartProducts.map((item) =>
        item.product.id === cartProduct.product.id
          ? { ...item, count: 1 }
          : item,
      );

      setCartProducts(updatedCartProducts);
    }
  }

  function removeProduct() {
    const updatedCartProducts = cartProducts.filter(
      (item) => item.product.id !== cartProduct.product.id,
    );

    setCartProducts(updatedCartProducts);
  }

  return (
    <div key={cartProduct.product.id} className={styles.containerCartProduct}>
      <img
        src={cartProduct.product.images[0]}
        alt={cartProduct.product.title}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{cartProduct.product.title}</h3>
        <p className={styles.price}>${cartProduct.product.price}</p>
      </div>
      <div className={styles.containerInteractions}>
        <button
          className={styles.btnDecrementQuantity}
          onClick={() => handleClick('decrement')}
        >
          -
        </button>
        <input
          className={styles.inputCount}
          type="text"
          value={cartProduct.count}
          onChange={(e) => handleChange(e)}
          onBlur={handleBlur}
        />
        <button
          className={styles.btnIncrementQuantity}
          onClick={() => handleClick('increment')}
        >
          +
        </button>
      </div>
      <p className={styles.price}>
        Total: ${(cartProduct.product.price * cartProduct.count).toFixed(2)}
      </p>
      <button className={styles.btnRemoveCartProduct} onClick={openModal}>
        &times;
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>Remove Product</h2>
        <p>Are you sure you want to remove this product?</p>
        <div className={styles.containerBtnsModal}>
          <button className={styles.btnCloseModal} onClick={closeModal}>
            Close
          </button>
          <button
            className={styles.btnModalRemoveProduct}
            onClick={removeProduct}
          >
            Remove
          </button>
        </div>
      </Modal>
    </div>
  );
}

function CartProducts() {
  const [cartProducts, setCartProducts] = useOutletContext();

  const subtotal = cartProducts.reduce(
    (total, item) => total + item.product.price * item.count,
    0,
  );

  return (
    <div className={styles.container}>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty. Go to our shop and check some goodies out!</p>
      ) : (
        <>
          <section className={styles.containerCartProducts}>
            <>
              {cartProducts.map((cartProduct) => (
                <CartProduct
                  key={cartProduct.product.id}
                  cartProduct={cartProduct}
                  cartProducts={cartProducts}
                  setCartProducts={setCartProducts}
                />
              ))}
            </>
          </section>
          <p className={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}

export default CartProducts;
