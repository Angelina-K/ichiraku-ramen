import React, { useEffect, useState } from 'react';
import { menuItemsService } from '../services/menuItemsService';
import { AddToCart } from '../components/AddToCart';
import { utilService } from '../services/utilService';
import { DishDetails } from '../components/DishDetails';

export const AssembleDish = (props) => {
  const [dish, setDish] = useState(null);

  const ramenIngredients = menuItemsService.getRamenIngredients();

  useEffect(() => {
    (async () => {
      try {
        window.scrollTo(0, 0);
        const dishId = props.dish ? props.dish.id : '';
        const dish = dishId ? props.dish : menuItemsService.getEmptyRamen();
        setDish(dish);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.id;
    setDish((prevState) => ({
      ...prevState,
      ingredients: { ...prevState.ingredients, [field]: value },
    }));
  };

  const handleCheckboxChange = (event) => {
    let price = dish.price;
    if (ramenIngredients.extraToppings.includes(event.target.id))
      price += ramenIngredients.extraPrice;
    let newArray = [...dish.ingredients.toppings, event.target.id];
    if (dish.ingredients.toppings.includes(event.target.id)) {
      newArray = newArray.filter((topping) => {
        if (
          topping === event.target.id &&
          ramenIngredients.extraToppings.includes(event.target.id)
        ) {
          price -= ramenIngredients.extraPrice;
        }
        return topping !== event.target.id;
      });
    }
    setDish((prevState) => ({
      ...prevState,
      price,
      ingredients: { ...prevState.ingredients, toppings: newArray },
    }));
  };

  if (!dish) return <div>Loading...</div>;
  return (
    <section className="assemble-dish flex">
      {props.match && props.match.url === '/assembleDish' && (
        <DishDetails dish={dish} ingredients={false} />
      )}

      <label htmlFor="broth">
        Broth<span>: {dish.ingredients.broth}</span>
      </label>
      <section className="assemble-section">
        {ramenIngredients.broth.map((option, idx) => {
          return (
            <div key={option + idx}>
              <input
                onChange={handleChange}
                type="radio"
                name="broth"
                id={option}
                checked={dish.ingredients.broth === option}
              />
              <span>{option}</span>
            </div>
          );
        })}
      </section>

      <label htmlFor="noodles">
        Noodles<span>: {dish.ingredients.noodles}</span>
      </label>
      <section className="assemble-section">
        {ramenIngredients.noodles.map((option, idx) => {
          return (
            <div key={option + idx}>
              <input
                onChange={handleChange}
                type="radio"
                name="noodles"
                id={option}
                checked={dish.ingredients.noodles === option}
              />
              <span>{option}</span>
            </div>
          );
        })}
      </section>

      <label htmlFor="topping">Toppings</label>
      <section className="assemble-section">
        {ramenIngredients.toppings.map((option, idx) => {
          return (
            <div key={option + idx}>
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="topping"
                id={option}
                value={option}
                checked={dish.ingredients.toppings.includes(option)}
              />
              <span>{option}</span>
              {ramenIngredients.extraToppings.includes(option) && (
                <span className="price">{ramenIngredients.extraPrice}</span>
              )}
            </div>
          );
        })}
      </section>

      <div className="dish-preview summery">
        <h2>Summery</h2>
        <h3>{dish.name}</h3>
        <span className="price">{dish.price}</span>
        <p>{utilService.getIngredientList(dish)}</p>
        {!dish.ingredients.broth || !dish.ingredients.noodles ? (
          <p>Please select broth and noodles</p>
        ) : (
          <AddToCart item={dish} />
        )}
      </div>
    </section>
  );
};
