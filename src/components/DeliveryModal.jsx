import React from 'react';

export const DeliveryModal = ({ closeModal }) => {
  // const handleClick = () => {
  //   closeModal();
  // };
  return (
    <>
      <div onClick={closeModal} className="dark-screen"></div>
      <section className="modal flex column">
        <h2>Your delivery is on it's way!</h2>
        <p>Thank you for ordering from Ichiraku Ramen.</p>
        <img
          src="https://res.cloudinary.com/dmxsqwvwv/image/upload/v1644175249/ramen-shop/naruto-run_uzbyzw.gif"
          alt=""
        />
        <button onClick={closeModal} className="small-btn">
          O.K
        </button>
      </section>
    </>
  );
};
