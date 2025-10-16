import styles from '../styles/Products.module.css';
import { useState } from 'react';

function Product({ product, cart }) {
  const [quantity, setQuantity] = useState(0);

  function handleClick(type) {
    type === 'increment'
      ? setQuantity((quantity) => quantity + 1)
      : quantity === 0
        ? setQuantity(0)
        : setQuantity(quantity - 1);
  }

  function handleChange(e) {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setQuantity(Number(e.target.value));
    }
  }

  function handleClickAddCart() {
    const hasCartProduct = cart.cartProducts.some(
      (item) => item.product.id === product.id,
    );

    if (quantity !== 0) {
      if (!hasCartProduct) {
        cart.setCartProducts([
          ...cart.cartProducts,
          { product, count: quantity },
        ]);
      } else {
        const updatedCartProducts = cart.cartProducts.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + quantity }
            : item,
        );

        cart.setCartProducts(updatedCartProducts);
      }
    }
  }

  return (
    <div className={styles.containerProduct}>
      <img
        src={product.images[0]}
        alt={product.title}
        className={styles.imgProduct}
      />
      <div className={styles.containerProductDetails}>
        <h3 className={styles.headingProduct}>{product.title}</h3>
        <div className={styles.bottom}>
          <p>${product.price}</p>
          <p>Rating: {product.rating}/5</p>
        </div>
        <div className={styles.containerInteractions}>
          <div className={styles.containerQuantity}>
            <button
              className={styles.btnDecrementQuantity}
              onClick={() => handleClick('decrement')}
            >
              -
            </button>
            <input
              type="text"
              className={styles.inputQuantity}
              value={quantity}
              onChange={handleChange}
            />
            <button
              className={styles.btnIncrementQuantity}
              onClick={() => handleClick('increment')}
            >
              +
            </button>
          </div>
          <button className={styles.btnAddCart} onClick={handleClickAddCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function Products({ cart, data }) {
  const { products, error, isLoading } = data;

  return (
    <section className={styles.sectionProducts}>
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {products.map((product) => (
            <Product key={product.id} product={product} cart={cart} />
          ))}
        </>
      )}
    </section>
  );
}

export default Products;
