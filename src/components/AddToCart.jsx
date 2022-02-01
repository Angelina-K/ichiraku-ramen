import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  updateCartItem,
  updateTotalPrice,
  removeCartItem,
} from '../store/actions/cartActions';
// import { useEffectUpdate } from '../hooks/useEffectUpdate';
import { utilService } from '../services/utilService';

export const AddToCart = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const dispatch = useDispatch();

  const { cartItems, totalPrice } = useSelector((state) => state.cartModule);

  const isItemInCart = useSelector((state) =>
    state.cartModule.cartItems.find((cartItem) => {
      return cartItem.id === item.id;
    })
  );

  const increment = (num) => {
    setQuantity((prev) => prev + num);
  };
  const addItemsToCart = () => {
    // console.log(totalPrice);
    if (!item.id) item.id = utilService.makeId();
    item.quantity = quantity;
    const price = totalPrice + item.quantity * item.price;
    dispatch(addToCart(item));
    dispatch(updateTotalPrice(price));
  };
  const updateOrder = () => {
    const newPrice = totalPrice + (quantity - item.quantity) * item.price;
    item.quantity = quantity;
    console.log('update', item.quantity, quantity);
    if (!quantity) {
      console.log('if');
      removeFromCart();
      return;
    }
    dispatch(updateCartItem(item));
    dispatch(updateTotalPrice(newPrice));
  };

  const removeFromCart = () => {
    console.log('remove');
    const newPrice = totalPrice - item.quantity * item.price;
    dispatch(updateTotalPrice(newPrice));
    dispatch(removeCartItem(item.id));
  };
  return (
    <section>
      <div>
        <button onClick={() => increment(-1)} disabled={quantity <= 0}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => increment(1)}>+</button>
      </div>
      {isItemInCart ? (
        <button onClick={updateOrder} disabled={item.quantity === quantity}>
          Update order ${item.price * quantity}
        </button>
      ) : (
        <button onClick={addItemsToCart}>
          Add to cart ${item.price * quantity}
        </button>
      )}
      {isItemInCart && <button onClick={removeFromCart}>Remove</button>}
    </section>
  );
};
