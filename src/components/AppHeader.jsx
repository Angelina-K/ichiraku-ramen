import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CheckoutPreview from './CheckoutPreview';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
export const AppHeader = (props) => {
  const [isMenuShown, setShowMenu] = useState(false);
  const [isCartShown, setIsCartShown] = useState(false);
  const { cartItems, totalPrice } = useSelector((state) => state.cartModule);
  // useEffect(() => {
  //   toggleMenu()
  //   return () => {};
  // }, [props.location]);

  const toggleMenu = () => {
    setShowMenu(!isMenuShown);
  };
  const toggleCartPreview = () => {
    setIsCartShown(!isCartShown);
  };
  return (
    <header className="main-header">
      {isMenuShown && <div onClick={toggleMenu} className="dark-screen"></div>}

      <NavLink exact to="/">
        <div className="logo flex align-center">
          <img
            src="https://res.cloudinary.com/dmxsqwvwv/image/upload/v1643292093/ramen-shop/pngegg_wfxvgb.png"
            alt=""
          />
          <span>Ichiraku Ramen</span>
        </div>
      </NavLink>
      <button onClick={toggleMenu} className="menu-btn">
        {isMenuShown ? 'x' : '≡'}
      </button>
      {/* <span className="menu-btn">≡</span> */}
      <nav className={isMenuShown ? 'show' : ''}>
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>

        <NavLink activeClassName="active" to="/menu">
          Menu
        </NavLink>
        <NavLink activeClassName="active" to="/checkout">
          Checkout
        </NavLink>
        <div className="dropdown">
          <button className="cart-btn" onClick={toggleCartPreview}>
            Cart
          </button>

          <div className={`dropdown-content  ${isCartShown ? 'show' : ''}`}>
            <button onClick={toggleCartPreview}>X</button>
            <CheckoutPreview />
            {cartItems.length !== 0 && (
              <div className="btn-container">
                <Link
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
    </header>
  );
};
