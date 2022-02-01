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
    // console.log('dish', dish);
    setDish(dish);
    setIngredients(utilService.getIngredientList(dish));
  };
  if (!dish) return <div>Loading..</div>;
  return (
    <main className="details-page">
      <section className="dish-details flex">
        <div className="info flex column">
          <h1>{dish.name}</h1>
          {/* <p>{dish.description}</p> */}
          <p>{ingredients}</p>
          <span className="price">{dish.price}</span>
        </div>
        <img src={dish.imgUrl} alt="" />
      </section>
      <AddToCart item={dish} />

      <AssembleDish dish={dish} />
      {/* <button>Add to cart</button> */}
    </main>
  );
};
