import React from 'react';
import { Link } from 'react-router-dom';
// import { DishDetails } from '../pages/DishDetails';
import { utilService } from '../services/utilService';
import { AddToCart } from './AddToCart';

export const MenuItemPreview = ({ item }) => {
  const { id, imgUrl, name, price } = item;

  const ingredients = item.ingredients
    ? utilService.getIngredientList(item)
    : [];

  const handleClick = (e) => {
    console.log('stop');
    e.stopPropagation();
  };
  return (
    <article className="dish-preview flex ">
      <Link
        to={item.type !== 'drink' ? `/dish/${id}` : '/menu'}
        className="info flex">
        <div className="img-container">
          <img src={imgUrl} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          {/* <p>{description}</p> */}
          <small>{ingredients}</small>
          <span className="price">{price}</span>
        </div>
      </Link>
      {/* <section className="actions"> */}
      <AddToCart onClick={handleClick} item={item} />
      {/* </section> */}
    </article>
  );
};
