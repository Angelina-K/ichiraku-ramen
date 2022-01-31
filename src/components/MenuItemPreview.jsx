import React from 'react';
import { Link } from 'react-router-dom';
// import { DishDetails } from '../pages/DishDetails';
import { utilService } from '../services/utilService';

export const MenuItemPreview = ({ item }) => {
  const { id, imgUrl, name, price } = item;

  const ingredients = item.ingredients
    ? utilService.getIngredientList(item)
    : [];
  return (
    <article className="dish-preview list-item flex">
      <Link to={item.type !== 'drink' ? `/dish/${id}` : '/menu'}>
        <div className="list-img-container">
          <img src={imgUrl} alt="" />
        </div>
        <div>
          <h3>{name}</h3>
          {/* <p>{description}</p> */}
          <p>{ingredients}</p>
          <p>{price}</p>
        </div>
      </Link>
    </article>
  );
};
