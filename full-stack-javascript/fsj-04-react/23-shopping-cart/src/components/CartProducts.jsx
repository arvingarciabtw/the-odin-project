function CartProducts({ cart }) {
  return (
    <>
      {cart.cartProducts.length === 0 ? (
        <p>Your cart is empty. Go to our shop and check some goodies out!</p>
      ) : (
        cart.cartProducts.map((cartProduct) => (
          <div key={cartProduct.product.id}>
            <p>{cartProduct.product.title}</p>
            <p>${cartProduct.product.price * cartProduct.count}</p>
            <p>Count: {cartProduct.count}</p>
          </div>
        ))
      )}
    </>
  );
}

export default CartProducts;
