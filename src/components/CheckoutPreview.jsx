import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { AddToCart } from './AddToCart';

export default function CheckoutPreview() {
  const { cartItems } = useSelector((state) => state.cartModule);
  return (
    <section className="checkout-preview  flex column">
      {cartItems.length === 0 && <h3>Your cart is empty</h3>}
      {cartItems.length !== 0 && (
        <div className="checkout-list">
          {cartItems.map((item, idx) => {
            return (
              <div className="item flex" key={item.id + idx}>
                <div className="img-container">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="flex column">
                  <h4>{item.name}</h4>
                  <AddToCart item={item} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* <Link className="action-btn checkout-btn" to="/checkout">
        Checkout
      </Link> */}
      {/* <button className="action-btn checkout-btn">
        Checkout <span className="price">{totalPrice}</span>
      </button> */}
    </section>
  );
}
