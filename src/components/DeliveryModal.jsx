import React from 'react';

export const DeliveryModal = ({ closeModal }) => {
  return (
    <>
      <div onClick={closeModal} className="dark-screen"></div>
      <section className="modal flex column">
        <h2>Your delivery is on it's way!</h2>
        <p>Thank you for ordering from Ichiraku Ramen.</p>
        <img
          src="https://res.cloudinary.com/dmxsqwvwv/image/upload/v1644259407/ramen-shop/naruto-run-nobg_cviqmp.gif"
          alt=""
        />
        <button onClick={closeModal} className="small-btn">
          O.K
        </button>
      </section>
    </>
  );
};
