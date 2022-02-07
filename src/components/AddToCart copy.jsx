import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  updateCartItem,
  // updateTotalPrice,
  removeCartItem,
} from '../store/actions/cartActions';
// import { useEffectUpdate } from '../hooks/useEffectUpdate';
import { utilService } from '../services/utilService';
import { useEffect } from 'react';

export const AddToCart = ({ item }) => {
  const { cartItems, totalPrice } = useSelector((state) => state.cartModule);

  const isItemInCart = useSelector((state) =>
    state.cartModule.cartItems.find((cartItem) => {
      return cartItem.id === item.id;
    })
  );
  const currItem = isItemInCart
    ? cartItems.filter((cartItem) => cartItem.id === item.id)
    : item;

  // useEffect(() => {
  //   return () => {
  //     setQuantity(currItem.quantity);
  //     console.log('USEEFFECT currItem.quantity', currItem.quantity);
  //   };
  // }, [currItem.quantity]);

  // const currItem = () => {
  //   if (isItemInCart) {
  //     return cartItems.filter((cartItem) => cartItem.id === item.id);
  //   } else {
  //     return item;
  //   }
  // };

  // console.log(currItem);
  const [quantity, setQuantity] = useState(currItem.quantity || 1);
  const dispatch = useDispatch();
  // const { cartItems, totalPrice } = useSelector((state) => state.cartModule);

  const increment = (num) => {
    setQuantity((prev) => prev + num);
  };
  const addItemsToCart = () => {
    console.log('quantity', quantity);
    if (!quantity) return;
    if (!currItem.id) currItem.id = utilService.makeId();
    // currItem.id = !item.id ? utilService.makeId() : item.id;
    currItem.quantity = quantity;
    console.log('ADDD currItem', currItem);
    // const price = totalPrice + item.quantity * item.price;
    // console.log('price', price);
    dispatch(addToCart(currItem));

    console.log('currItem', currItem);
    console.log('quantity', quantity);
    // dispatch(updateTotalPrice(price));
  };
  const updateOrder = () => {
    // let price = totalPrice;
    // console.log('quantity', quantity);
    // console.log('quantity', item.quantity);
    // if (quantity > item.quantity) {
    currItem.quantity = quantity;
    // price = totalPrice + (quantity - item.quantity || 1) * item.price;
    // } else {
    //   price = totalPrice + (totalPrice - item.price);
    // }

    // console.log('newPrice', newPrice);
    if (!quantity) {
      removeFromCart();
      return;
    }
    // console.log('item', item);
    dispatch(updateCartItem(currItem));
    // dispatch(updateTotalPrice(price));
  };

  const removeFromCart = () => {
    // console.log('remove');
    // const newPrice = totalPrice - item.quantity * item.price;
    dispatch(removeCartItem(currItem.id));
    // dispatch(updateTotalPrice(newPrice));
  };
  return (
    <section className="add-to-cart flex">
      <div className="quantity-selection flex ">
        <button
          className="small-btn"
          onClick={() => increment(-1)}
          disabled={quantity <= 0}>
          -
        </button>
        <span>{quantity}</span>
        <button className="small-btn" onClick={() => increment(1)}>
          +
        </button>
      </div>
      {isItemInCart ? (
        <div className="in-cart-actions flex">
          <button className="action-btn" onClick={updateOrder}>
            <p>Update order</p>{' '}
            <span className="price">{currItem.price * quantity}</span>
          </button>
          <button className="small-btn remove" onClick={removeFromCart}>
            Remove
          </button>
        </div>
      ) : (
        <button className="action-btn" onClick={addItemsToCart}>
          <p>Add to cart</p>{' '}
          <span className="price">{currItem.price * quantity}</span>
        </button>
      )}
      {/* {isItemInCart && (
        <button className="small-btn" onClick={removeFromCart}>
          Remove
        </button>
      )} */}
    </section>
  );
};
