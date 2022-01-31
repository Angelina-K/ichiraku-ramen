import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { getById } from '../store/actions/menuItemsActions';
import { menuItemsService } from '../services/menuItemsService';
import { AddToCart } from '../components/AddToCart';
import { MenuItemPreview } from '../components/MenuItemPreview';

export const AssembleDish = (props) => {
  const [dish, setDish] = useState(null);

  const ramenIngredients = menuItemsService.getRamenIngredients();

  useEffect(() => {
    (async () => {
      try {
        const dishId = props.match.params.id;
        const dish = dishId
          ? await getById(dishId)
          : menuItemsService.getEmptyRamen();
        setDish(dish);
        console.log(dish);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.id;
    setDish((prevState) => ({ ...prevState, [field]: value }));
    console.log(dish);
  };

  const handleCheckboxChange = (event) => {
    let extraPrice = 0;
    if (ramenIngredients.extraToppings.includes(event.target.id))
      extraPrice = ramenIngredients.extraPrice;
    // console.log(extraPrice);

    let newArray = [...dish.toppings, event.target.id];
    if (dish.toppings.includes(event.target.id)) {
      newArray = newArray.filter((topping) => {
        if (
          topping === event.target.id &&
          ramenIngredients.extraToppings.includes(event.target.id)
        ) {
          extraPrice = ramenIngredients.extraPrice * -1;
        }
        return topping !== event.target.id;
      });
    }
    console.log(dish);
    console.log(extraPrice);
    setDish((prevState) => ({
      ...prevState,
      toppings: newArray,
      price: (prevState.price += extraPrice),
    }));
    console.log(dish);
  };

  const save = () => {
    console.log('save', dish);
  };

  if (!dish) return <div>Loading...</div>;
  return (
    <section>
      {dish.broth}
      {dish.noodles}
      {dish.toppings}
      {/* <form action=""> */}
      <section className="assemble-section">
        {ramenIngredients.broth.map((option, idx) => {
          return (
            <div key={option + idx}>
              <span>{option}</span>
              <input
                onChange={handleChange}
                type="radio"
                name="broth"
                id={option}
                value={dish.broth}
              />
            </div>
          );
        })}
      </section>
      <section className="assemble-section">
        {ramenIngredients.noodles.map((option, idx) => {
          return (
            <div key={option + idx}>
              <span>{option}</span>
              <input
                onChange={handleChange}
                type="radio"
                name="noodles"
                id={option}
                value={dish.noodles}
              />
            </div>
          );
        })}
      </section>

      <section className="assemble-section">
        {ramenIngredients.toppings.map((option, idx) => {
          return (
            <div key={option + idx}>
              <span>{option}</span>
              <span>
                {ramenIngredients.extraToppings.includes(option)
                  ? ramenIngredients.extraPrice
                  : ''}
              </span>

              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name="topping"
                id={option}
                value={option}
                //   checked={checked}
                // checked={dish.broth}
              />
            </div>
          );
        })}
      </section>
      <button onClick={save}>save</button>
      {/* </form> */}
      <div>
        <h2>Summery</h2>
        <MenuItemPreview item={dish} />
      </div>
      <AddToCart item={dish} />
    </section>
  );
};
