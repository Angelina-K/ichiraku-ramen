import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AddToCart } from '../components/AddToCart';
import { MenuItemPreview } from '../components/MenuItemPreview';

export const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cartModule);
  // const { totalPrice } = useSelector((state) => state.cartModule);
  console.log(cartItems);
  // const [totalPrice,setTotalPrice]=useState(0)
  useEffect(() => {
    return () => {};
  }, []);

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
      <h2>Total price: {totalPrice}</h2>
    </main>
  );
};
