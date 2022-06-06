import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeItemFromCheckout } =
    useContext(CartContext);
  const { name, quantity, imageUrl, price } = cartItem;

  const decreaseQuantityHandler = () => removeItemFromCart(cartItem);
  const increaseQuantityHandler = () => addItemToCart(cartItem);
  const removeItemFromCheckoutHandler = () => removeItemFromCheckout(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <div className="quantity">
        <span className="arrow" onClick={decreaseQuantityHandler}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={increaseQuantityHandler}>
          &#10095;
        </span>
      </div>
      <span className="price">{price}</span>

      <span className="remove-button" onClick={removeItemFromCheckoutHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
