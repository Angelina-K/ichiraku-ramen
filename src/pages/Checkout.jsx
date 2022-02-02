import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { AddToCart } from '../components/AddToCart';
import { Form } from '../components/Form';
import { orderService } from '../services/orderService';
import { MenuItemPreview } from '../components/MenuItemPreview';
import { useDispatch } from 'react-redux';
import { DeliveryModal } from '../components/DeliveryModal';
import { clearCart } from '../store/actions/cartActions';

export const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cartModule);
  const [isFormShown, setForm] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);
  console.log('cartItems', cartItems);
  const placeOrder = (form) => {
    let order = orderService.getEmptyOrder();
    order.costumer = form;
    order.items = cartItems;
    order.totalPrice = totalPrice;
    orderService.saveOrder({ ...order });
    toggleModal();
    toggleForm();
    dispatch(clearCart());
  };

  const toggleForm = () => {
    setForm(!isFormShown);
  };
  const toggleModal = () => {
    // console.log(isModalShown);
    setIsModalShown(!isModalShown);
    // console.log(isModalShown);
  };

  if (!cartItems) return <div>Loading...</div>;
  return (
    <main>
      <h1>Order</h1>
      {cartItems.map((item) => {
        return (
          <div key={item.id + 'checkout'}>
            <MenuItemPreview item={item} />
          </div>
        );
      })}
      <h2>
        Total price: <span className="price">{totalPrice}</span>{' '}
      </h2>
      {!isFormShown && (
        <button onClick={toggleForm} className="action-btn">
          Checkout
        </button>
      )}

      {isFormShown && (
        <Form
          onSubmit={placeOrder}
          formType={'delivery'}
          submitTxt={'Place order'}
        />
      )}
      {isModalShown && <DeliveryModal closeModal={toggleModal} />}
    </main>
  );
};
