import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, updateCartItem } from '../store/actions/cartActions';
// import { useEffectUpdate } from '../hooks/useEffectUpdate';

export const AddToCart = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cartModule);

  const isItemInCart = useSelector((state) =>
    state.cartModule.cartItems.find((cartItem) => {
      return cartItem.id === item.id;
    })
  );

  const increment = (num) => {
    setQuantity((prev) => prev + num);
  };
  const addItemsToCart = () => {
    item.quantity = quantity;
    dispatch(addToCart(item));
  };
  const updateQuantity = () => {
    item.quantity = quantity;

    dispatch(updateCartItem(item));
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
        <button onClick={updateQuantity}>
          Update order ${item.price * quantity}
        </button>
      ) : (
        <button onClick={addItemsToCart}>
          Add to cart ${item.price * quantity}
        </button>
      )}
    </section>
  );
};
