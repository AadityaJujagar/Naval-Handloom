import "./navbar.scss";
import navLogo from "../../../public/assets/nav-logo.svg";
import closeMenu from "../../../public/assets/close-menu.svg";
import openMenu from "../../../public/assets/menu-burger.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [pageIdentifier, setPageIdentifier] = useState("home");
  const [clickMenu, setClickMenu] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    setPageIdentifier(currentPath || "home");
  }, [location]);

  const clickHandler = (navElement) => {
    setPageIdentifier(navElement);
  };

  const onClickMenu = () => {
    setClickMenu(!clickMenu);
  };

  return (
    <div className="nav-parent">
      <nav>
        <NavLink style={{ textDecoration: "none" }} to="/" className="logo">
          <img src={navLogo} alt="nav-logo" />
          <p className="logo-text">Naval Handlooms</p>
        </NavLink>
        <div className="nav-elements">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <p
              onClick={() => clickHandler("home")}
              className={
                "nav-element" + (pageIdentifier === "home" ? "active" : "")
              }
            >
              Home
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/products">
            <p
              onClick={() => clickHandler("products")}
              className={
                "nav-element" + (pageIdentifier === "products" ? "active" : "")
              }
            >
              Products
            </p>
          </NavLink>
        </div>
        <div className="nav-elements">
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <p
              onClick={() => clickHandler("login")}
              id="login"
              className={
                "nav-element" + (pageIdentifier === "login" ? "active" : "")
              }
            >
              Login
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/signup">
            <p
              onClick={() => clickHandler("signup")}
              id="signup"
              className={
                "nav-element" + (pageIdentifier === "signup" ? "active" : "")
              }
            >
              Signup
            </p>
          </NavLink>
        </div>
        <div className="menu" onClick={onClickMenu}>
          {clickMenu === true ? (
            <img src={openMenu} alt="" />
          ) : (
            <img src={closeMenu} alt="" />
          )}
        </div>
      </nav>
      <div className="dropdown">
        {!clickMenu && (
          <div className="menu-items">
            <NavLink style={{ textDecoration: "none" }} to="/">
              <p onClick={onClickMenu} className="menu-element">
                Home
              </p>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/products">
              <p onClick={onClickMenu} className="menu-element">
                Products
              </p>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <p onClick={onClickMenu} className="menu-element">
                Login
              </p>
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/signup">
              <p onClick={onClickMenu} className="menu-element">
                Signup
              </p>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
