import styles from '../styles/CartProducts.module.css';

function CartProduct({ cartProduct, cart }) {
  function handleClick(type) {
    if (type === 'increment') {
      const updatedCartProducts = cart.cartProducts.map((item) =>
        item.product.id === cartProduct.product.id
          ? { ...item, count: item.count + 1 }
          : item,
      );

      cart.setCartProducts(updatedCartProducts);
    } else if (type === 'decrement') {
      const updatedCartProducts = cart.cartProducts.map((item) =>
        item.product.id === cartProduct.product.id
          ? { ...item, count: item.count - 1 }
          : item,
      );

      cart.setCartProducts(updatedCartProducts);
    }
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
