import styles from '../styles/CartProducts.module.css';

function CartProducts({ cart }) {
  return (
    <section className={styles.containerCartProducts}>
      {cart.cartProducts.length === 0 ? (
        <p>Your cart is empty. Go to our shop and check some goodies out!</p>
      ) : (
        cart.cartProducts.map((cartProduct) => (
          <div
            key={cartProduct.product.id}
            className={styles.containerCartProduct}
          >
            <img
              src={cartProduct.product.images[0]}
              alt={cartProduct.product.title}
            />
            <div className={styles.details}>
              <h3 className={styles.title}>{cartProduct.product.title}</h3>
              <p className={styles.price}>${cartProduct.product.price}</p>
            </div>
            <div className={styles.containerInteractions}>
              <button className={styles.btnDecrementQuantity}>-</button>
              <p className={styles.count}>{cartProduct.count}</p>
              <button className={styles.btnIncrementQuantity}>+</button>
            </div>
            <p className={styles.price}>
              Total: ${cartProduct.product.price * cartProduct.count}
            </p>
          </div>
        ))
      )}
    </section>
  );
}

export default CartProducts;
