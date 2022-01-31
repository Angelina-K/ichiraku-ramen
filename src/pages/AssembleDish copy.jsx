import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { getById } from '../store/actions/menuItemsActions';
import { menuItemsService } from '../services/menuItemsService';
export const AssembleDish = (props) => {
  const [dish, setDish] = useState(null);

  //   const [dish, handleChange, setDish] = useForm(null);
  const ramenIngredients = menuItemsService.getRamenIngredients();

  const [checked, setChecked] = useState(false);

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
    const value = target.value;
    setDish((prevState) => ({ ...prevState, [field]: value }));
    console.log(dish);
  };

  const handleCheckboxChange = (event) => {
    let newArray = [...dish.toppings, event.target.id];
    if (dish.toppings.includes(event.target.id)) {
      newArray = newArray.filter((day) => day !== event.target.id);
    }
    setDish({
      toppings: newArray,
    });
  };

  if (!dish) return <div>Loading...</div>;
  return (
    <section>
      {dish.broth}
      {dish.noodles}
      {dish.toppings}
      <form action="">
        <select onChange={handleChange} value={dish.broth} name="broth">
          <option value="" disabled>
            Broth
          </option>
          {ramenIngredients.broth.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>

        <select onChange={handleChange} value={dish.noodles} name="noodles">
          <option value="" disabled>
            Noodles
          </option>
          {ramenIngredients.noodles.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>

        {ramenIngredients.toppings.map((option, idx) => {
          return (
            <div key={option + idx}>
              <span>{option}</span>
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
      </form>
    </section>
  );
};
