import React, { useEffect, useState } from 'react';
import { getById } from '../store/actions/menuItemsActions';
import { utilService } from '../services/utilService';
import { AddToCart } from '../components/AddToCart';
import { AssembleDish } from './AssembleDish';
import { DishDetails } from '../components/DishDetails';

export const DishDetailsPage = (props) => {
  const [dish, setDish] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    loadDish();
  }, [props.match.params.id]);

  const loadDish = async () => {
    const dish = await getById(props.match.params.id);

    setDish(dish);
    setIngredients(utilService.getIngredientList(dish));
  };
  if (!dish) return <div>Loading..</div>;
  return (
    <main className="details-page">
      <DishDetails dish={dish} ingredients={ingredients} />
      <AddToCart item={dish} />

      <AssembleDish dish={dish} />
    </main>
  );
};
