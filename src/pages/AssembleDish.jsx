import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { getById } from '../store/actions/menuItemsActions';
import { menuItemsService } from '../services/menuItemsService';
import { AddToCart } from '../components/AddToCart';
import { MenuItemPreview } from '../components/MenuItemPreview';
import { utilService } from '../services/utilService';

export const AssembleDish = (props) => {
  const [dish, setDish] = useState(null);
  //   const [ingredients, setIngredients] = useState(null);

  const ramenIngredients = menuItemsService.getRamenIngredients();

  useEffect(() => {
    (async () => {
      try {
        const dishId = props.dish ? props.dish.id : '';
        console.log(props);
        // console.log(props.match);
        const dish = dishId ? props.dish : menuItemsService.getEmptyRamen();
        setDish(dish);
        // setIngredients(dish.ingredients);
        console.log(dish);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleChange = ({ target }) => {
    const field = target.name;
    const value = target.id;
    // setIngredients((prevState) => ({ ...prevState, [field]: value }));
    // setDish((prevState) => ({
    //   ...prevState,
    //   ingredients,
    // }));
    setDish((prevState) => ({
      ...prevState,
      ingredients: { ...prevState.ingredients, [field]: value },
    }));
  };

  const handleCheckboxChange = (event) => {
    // const { toppings } = dish.ingredients;
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

    // setIngredients((prevState) => ({ ...prevState, toppings: newArray }));
    setDish((prevState) => ({
      ...prevState,
      price,
      ingredients: { ...prevState.ingredients, toppings: newArray },
    }));
  };

  const save = () => {
    // dish.ingredients = ingredients;
    console.log('save', dish);
  };

  if (!dish) return <div>Loading...</div>;
  return (
    <section>
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
                // value={dish.ingredients.broth}
                checked={dish.ingredients.broth === option}
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
                // value={dish.ingredients.noodles}
                checked={dish.ingredients.noodles === option}
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
                checked={dish.ingredients.toppings.includes(option)}
              />
            </div>
          );
        })}
      </section>
      <button onClick={save}>save</button>
      {/* </form> */}
      <div>
        <h2>Summery</h2>
        {/* <MenuItemPreview item={dish} /> */}
        <h3>{dish.name}</h3>
        <p>{dish.price}</p>
        <p>{utilService.getIngredientList(dish)}</p>
      </div>
      <AddToCart item={dish} />
    </section>
  );
};
