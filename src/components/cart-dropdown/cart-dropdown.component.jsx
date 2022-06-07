import Button from "../button/button.component";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  // Using navigate to redirect to a new route
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </CartItems>
      ) : (
        <EmptyMessage>Your Cart is Empty</EmptyMessage>
      )}
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
