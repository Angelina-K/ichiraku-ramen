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
import { MenuItemsList } from '../components/MenuItemsList';
import { ActionBtn } from '../components/ActionBtn';
export const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cartModule);
  const [isFormShown, setForm] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);

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
    setIsModalShown(!isModalShown);
  };

  if (!cartItems) return <div>Loading...</div>;
  return (
    <main className="checkout-page flex column">
      <h1>{!cartItems.length ? 'Your cart is empty' : 'Your order'}</h1>
      <MenuItemsList items={cartItems} />
      {/* {cartItems.map((item) => {
        return (
          <div key={item.id + 'checkout'}>
            <MenuItemPreview item={item} />
          </div>
        );
      })} */}

      <h2>
        Total: <span className="price">{totalPrice}</span>{' '}
      </h2>
      {!isFormShown && (
        <ActionBtn action={toggleForm} btnTxt={'Checkout'} />
        // <button
        //   onClick={toggleForm}
        //   disabled={!cartItems.length}
        //   className="action-btn checkout-btn">
        //   Checkout <span className="price">{totalPrice}</span>
        // </button>
      )}

      {isFormShown && (
        <Form onSubmit={placeOrder} formType={'delivery'} submitTxt={'Order'} />
      )}
      {isModalShown && <DeliveryModal closeModal={toggleModal} />}
    </main>
  );
};
