import styles from '../styles/CartProducts.module.css';
import { useState } from 'react';
import Modal from './Modal';

function CartProduct({ cartProduct, cart }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function handleClick(type) {
    if (type === 'increment') {
      const updatedCartProducts = cart.cartProducts.map((item) =>
        item.product.id === cartProduct.product.id
          ? { ...item, count: item.count + 1 }
          : item,
      );

      cart.setCartProducts(updatedCartProducts);
    } else if (type === 'decrement') {
      if (cartProduct.count !== 1) {
        const updatedCartProducts = cart.cartProducts.map((item) =>
          item.product.id === cartProduct.product.id
            ? { ...item, count: item.count - 1 }
            : item,
        );

        cart.setCartProducts(updatedCartProducts);
      }
    }
  }

  function removeProduct() {
    const updatedCartProducts = cart.cartProducts.filter(
      (item) => item.product.id !== cartProduct.product.id,
    );

    cart.setCartProducts(updatedCartProducts);
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
        <p className={styles.count}>{cartProduct.count}</p>
        <button
          className={styles.btnIncrementQuantity}
          onClick={() => handleClick('increment')}
        >
          +
        </button>
      </div>
      <p className={styles.price}>
        Total: ${cartProduct.product.price * cartProduct.count}
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

function CartProducts({ cart }) {
  return (
    <section className={styles.containerCartProducts}>
      {cart.cartProducts.length === 0 ? (
        <p>Your cart is empty. Go to our shop and check some goodies out!</p>
      ) : (
        cart.cartProducts.map((cartProduct) => (
          <CartProduct
            key={cartProduct.product.id}
            cartProduct={cartProduct}
            cart={cart}
          />
        ))
      )}
    </section>
  );
}

export default CartProducts;
