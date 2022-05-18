import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop">Shop</Link>
          <Link to="/sign-in">SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
