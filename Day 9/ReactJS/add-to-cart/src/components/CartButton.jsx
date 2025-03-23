import { Link } from "react-router";
import useCart from "../context/CartContext";

const CartButton = () => {
  const { cartState } = useCart();
  //  console.log(cartState);
   let count = cartState.cart.length;

  return (
    <button className="cart-btn">
      <Link to="/cart">
      Cart
      <sup>{count}</sup>
      </Link>
    </button>
  );
};
export default CartButton;
