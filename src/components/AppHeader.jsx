import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
export const AppHeader = () => {
  const [isMenuShown, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log('isMenuShown', isMenuShown);
    setShowMenu(!isMenuShown);
  };
  return (
    <header className="main-header">
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
