import useCart from "../context/CartContext";

const Product = ({ title, price, image, category, id }) => {
  const { cartState, dispatch } = useCart();
 const {cart} = cartState
  const product = { id, title, category, image, price, qty: 1 };
  const findProduct = cart.find((elm) => elm.id == product.id);

  const handleClick = () => {
    // some code
    if (findProduct) {
      dispatch({
        type: "Update_QTY",
        payload: { id, qty: findProduct.qty + 1 },
      });
      console.log("product quantiy increased in cart");
    } else {
      dispatch({ type: "Add_To_Cart", payload: { product } });
      console.log("product added to cart");
    }
  };

  return (
    <div className="product">
      <div className="img-div">
        <img src={image} alt="Product image" />
      </div>
      <h3>{title}</h3>
      <p>
        <span>Price : </span>
        <span>$ &nbsp;{price}</span>
      </p>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  );
};

export default Product;
