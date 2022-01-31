import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { loadUser, logOut } from '../store/actions/userActions';

export const AppHeader = () => {
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
      <nav>
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
