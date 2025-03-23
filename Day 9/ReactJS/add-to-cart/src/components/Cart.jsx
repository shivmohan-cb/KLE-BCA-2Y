import { useEffect, useState } from "react";
import useCart from "../context/CartContext";

const CartItem = ({ id, image, title, price, qty }) => {
  const [quantity, setQuantity] = useState(qty);

  const { dispatch } = useCart();

  const increase = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };
  const handleDelete = () => {
    dispatch({ type: "Remove_From_Cart", payload: { id } });
  };

  useEffect(() => {
    dispatch({ type: "Update_QTY", payload: { id, qty: quantity } });
  }, [quantity]);
  return (
    <div className="cart-item">
      <div className="img-div">
        <img src={image} alt="product image" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>
          <span>Price :</span>
          <span> $ {price}</span>
        </p>
        <div>
          <div className="qty">
            <button onClick={decrease}>&minus;</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
            <button className="remove" onClick={handleDelete}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartState } = useCart();
  const { cart } = cartState;
  const cartLength = cart.length || 0;
  const cartTotal = cartState.total().toFixed(2);
  return (
    <div className="cart">
      <div className="orders">
        {cartLength ? (
          cart.map((elm) => (
            <CartItem
              key={elm.id}
              id={elm.id}
              title={elm.title}
              image={elm.image}
              price={elm.price}
              qty={elm.qty}
            />
          ))
        ) : (
          <div>No Product in Cart</div>
        )}
      </div>
      <div className="divider"></div>
      <div className="order-total">
        <div className="estimate">
          <span>{`Total items(${cartLength})`}</span>
          <span> $ {cartTotal}</span>
        </div>
        <div className="divider"></div>
        <div>
          <b>
            <span>Total</span>
          </b>
          <b>
            <span> $ {cartTotal}</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Cart;
