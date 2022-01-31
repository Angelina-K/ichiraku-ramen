import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AddToCart } from '../components/AddToCart';
import { MenuItemPreview } from '../components/MenuItemPreview';

export const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cartModule);

  if (!cartItems) return <div>Loading...</div>;
  return (
    <main>
      <h1>Order</h1>
      {cartItems.map((item) => {
        // const { id } = item.itemInfo;
        return (
          <div key={item.id + 'checkout'}>
            <MenuItemPreview item={item} />
            <AddToCart item={item} />
            {/* <p>Quantity: {item.quantity}</p> */}
          </div>
        );
      })}
    </main>
  );
};
