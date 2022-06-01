import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utlis";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    console.log("User signed out successfully");
    // setCurrentUser(null);
  };

  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
