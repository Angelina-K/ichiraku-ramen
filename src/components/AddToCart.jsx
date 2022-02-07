import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  updateCartItem,
  removeCartItem,
} from '../store/actions/cartActions';
import { utilService } from '../services/utilService';
import { useEffect } from 'react';

export const AddToCart = ({ item }) => {
  const { cartItems, totalPrice } = useSelector((state) => state.cartModule);
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const [currItem, setCurrItem] = useState(item);

  const dispatch = useDispatch();

  const isItemInCart = useSelector((state) =>
    state.cartModule.cartItems.find((cartItem) => {
      return cartItem.id === item.id;
    })
  );

  const itemIdxInCart = cartItems.indexOf(
    (cartItem) => cartItem.id === item.id
  );

  useEffect(() => {
    setCurrItem(itemIdxInCart !== -1 ? currItem[itemIdxInCart] : item);

    return () => {};
  }, []);

  useEffect(() => {
    setQuantity(currItem.quantity || 1);
    return () => {};
  }, [currItem.quantity]);

  const increment = (num) => {
    setQuantity((prev) => prev + num);
  };

  const addItemsToCart = () => {
    if (!quantity) return;
    if (!item.id) item.id = utilService.makeId();
    item.quantity = quantity;
    dispatch(addToCart(item));
  };

  const updateOrder = () => {
    item.quantity = quantity;
    if (!quantity) {
      removeFromCart();
      return;
    }
    dispatch(updateCartItem(item));
  };

  const removeFromCart = () => {
    dispatch(removeCartItem(item.id));
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
            <span className="price">{item.price * quantity}</span>
          </button>
          <button className="small-btn remove" onClick={removeFromCart}>
            <img src={require('../assets/icons/remove.png')} alt="" />
          </button>
        </div>
      ) : (
        <button className="action-btn" onClick={addItemsToCart}>
          <p>Add to cart</p>{' '}
          <span className="price">{item.price * quantity}</span>
        </button>
      )}
    </section>
  );
};
