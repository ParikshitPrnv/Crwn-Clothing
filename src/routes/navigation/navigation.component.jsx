import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utlis";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

function Navigation() {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    console.log("User signed out successfully");
  };

  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutHandler}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
      </NavigationContainer>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
