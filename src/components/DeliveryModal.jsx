import React from 'react';

export const DeliveryModal = ({ closeModal }) => {
  const handleClick = () => {
    closeModal();
  };
  return (
    <section className="modal">
      <h2>delivering</h2>
      <button onClick={handleClick} className="small-btn">
        ok
      </button>
    </section>
  );
};
