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
    if (!quantity) return;
    if (!item.id) item.id = utilService.makeId();
    item.quantity = quantity;
    const price = totalPrice + item.quantity * item.price;
    dispatch(addToCart(item));
    dispatch(updateTotalPrice(price));
  };
  const updateOrder = () => {
    const newPrice = totalPrice + (quantity - item.quantity) * item.price;
    item.quantity = quantity;
    // console.log('update', item.quantity, quantity);
    if (!quantity) {
      removeFromCart();
      return;
    }
    dispatch(updateCartItem(item));
    dispatch(updateTotalPrice(newPrice));
  };

  const removeFromCart = () => {
    // console.log('remove');
    const newPrice = totalPrice - item.quantity * item.price;
    dispatch(removeCartItem(item.id));
    dispatch(updateTotalPrice(newPrice));
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
          <button
            className="action-btn"
            onClick={updateOrder}
            disabled={item.quantity === quantity}>
            <p>Update order</p>{' '}
            <span className="price">{item.price * quantity}</span>
          </button>
          <button className="small-btn" onClick={removeFromCart}>
            Remove
          </button>
        </div>
      ) : (
        <button className="action-btn" onClick={addItemsToCart}>
          <p>Add to cart</p>{' '}
          <span className="price">{item.price * quantity}</span>
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
