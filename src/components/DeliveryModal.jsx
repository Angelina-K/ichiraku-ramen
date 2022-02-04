import React from 'react';

export const DeliveryModal = ({ closeModal }) => {
  // const handleClick = () => {
  //   closeModal();
  // };
  return (
    <>
      <div onClick={closeModal} className="dark-screen"></div>
      <section className="modal flex column">
        <h2>delivering</h2>
        <button onClick={closeModal} className="small-btn">
          ok
        </button>
      </section>
    </>
  );
};
