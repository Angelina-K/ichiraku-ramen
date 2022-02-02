import React from 'react';

export const DishDetails = ({ dish, ingredients }) => {
  return (
    <section className="dish-details flex">
      <div className="info flex column">
        <h1>{dish.name}</h1>
        {ingredients ? <p>{ingredients}</p> : <span>{dish.description}</span>}
        <span className="price">{dish.price}</span>
      </div>
      <img src={dish.imgUrl} />
    </section>
  );
};
