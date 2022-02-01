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
    <article className="dish-preview container ">
      <Link to={item.type !== 'drink' ? `/dish/${id}` : '/menu'} className="">
        <div className="img-container">
          <img src={imgUrl} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          {/* <p>{description}</p> */}
          {/* <p>{ingredients}</p> */}
          <p>{price}</p>
        </div>
      </Link>
      <AddToCart onClick={handleClick} item={item} />
    </article>
  );
};
