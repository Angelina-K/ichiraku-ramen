import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CheckoutPreview from './CheckoutPreview';

export const AppHeader = (props) => {
  const [isMenuShown, setShowMenu] = useState(false);
  const [isCartShown, setIsCartShown] = useState(false);
  const { cartItems, totalPrice } = useSelector((state) => state.cartModule);
  const { width } = useWindowDimensions();

  const toggleMenu = () => {
    if (width < 640) {
      setShowMenu(!isMenuShown);
    }
    if (isCartShown) toggleCartPreview();
  };
  const toggleCartPreview = () => {
    setIsCartShown(!isCartShown);
  };
  return (
    <header className="main-layout">
      <section className="header-content ">
        {isMenuShown && width < 640 && (
          <div onClick={toggleMenu} className="dark-screen"></div>
        )}

        <NavLink exact to="/">
          <div className="logo flex align-center">
            <img src="https://res.cloudinary.com/dmxsqwvwv/image/upload/v1644259413/ramen-shop/logo-nobg_q2bjiw.png" />
            {/* <img
              src="https://res.cloudinary.com/dmxsqwvwv/image/upload/v1644225861/ramen-shop/logoogogogoogog_bvufvd.jpg"
              alt=""
            /> */}
          </div>
        </NavLink>
        <button onClick={toggleMenu} className="menu-btn">
          {isMenuShown ? 'x' : '≡'}
        </button>
        <nav className={isMenuShown && width < 640 ? 'show' : ''}>
          <NavLink exact onClick={toggleMenu} activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink onClick={toggleMenu} activeClassName="active" to="/menu">
            Menu
          </NavLink>
          <NavLink onClick={toggleMenu} activeClassName="active" to="/checkout">
            Checkout
          </NavLink>
          <div className="dropdown">
            <button
              className="btn-cart"
              className="cart-btn"
              onClick={toggleCartPreview}>
              Cart
            </button>

            <div className={`dropdown-content  ${isCartShown ? 'show' : ''}`}>
              <button onClick={toggleCartPreview}>X</button>
              <CheckoutPreview />
              {cartItems.length !== 0 && (
                <div className="btn-container">
                  <Link
                    onClick={toggleMenu}
                    onClick={toggleCartPreview}
                    className="action-btn checkout-btn"
                    to="/checkout">
                    Checkout <span className="price">{totalPrice}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* <NavLink activeClassName="active" exact to="/about">
          About
        </NavLink> */}

          {/* {user ? (
          <button onClick={logOutHandler}>Log out</button>
        ) : (
          <NavLink activeClassName="active" exact to="/sign-up">
            Sign up
          </NavLink>
        )} */}
        </nav>
      </section>
    </header>
  );
};
