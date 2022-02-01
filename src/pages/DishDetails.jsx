import React, { useEffect, useState } from 'react';
import { getById } from '../store/actions/menuItemsActions';
import { utilService } from '../services/utilService';
import { AddToCart } from '../components/AddToCart';
import { AssembleDish } from './AssembleDish';
export const DishDetails = (props) => {
  const [dish, setDish] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    loadDish();
  }, [props.match.params.id]);

  const loadDish = async () => {
    const dish = await getById(props.match.params.id);
    console.log('dish', dish);
    setDish(dish);
    setIngredients(utilService.getIngredientList(dish));
  };
  if (!dish) return <div>Loading..</div>;
  return (
    <div>
      <h1>{dish.name}</h1>
      <h3>{dish.description}</h3>
      <p>{ingredients}</p>
      <p>{dish.price}</p>
      <img src={dish.imgUrl} alt="" />
      <AssembleDish dish={dish} />
      {/* <AddToCart item={dish} /> */}
      {/* <button>Add to cart</button> */}
    </div>
  );
};
