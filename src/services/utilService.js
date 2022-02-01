export const utilService = {
  delay,
  getRandomInt,
  makeId,
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
  getIngredientList,
};
// function _flattenDishIngredients(dish) {
//   let ingredientList = [];
//   dish.ingredients.forEach((field) => {
//     const values = Object.values(field);
//     if (Array.isArray(values)) {
//       ingredientList = ingredientList.concat(...values);
//       // ingredientList.push(flattenArray(values));
//     }
//   });
//   // console.log(ingredientList);
//   return ingredientList;
// }

function getIngredientList(dish) {
  const ingredients = dish.ingredients;
  let list = [];
  if (!Array.isArray(ingredients)) {
    for (const key in ingredients) {
      // if (ingredients[key]) {
      list = list.concat(ingredients[key]);
      // }
    }
  } else {
    console.log('ARRAY');
  }
  if (list[1]) {
    const lastIngr = list.pop();
    return `${list.join(', ')} and ${lastIngr}  `;
  } else {
    return list;
  }
  // return list;
  // console.log('list', list);

  // } else {
  // }
  // return `${ingrArray.join(', ')} and ${lastIngr}.`;
  // return list;

  // const ingrArray = _flattenDishIngredients(dish);
  // const lastIngr = ingrArray.pop();
  // return `${ingrArray.join(', ')} and ${lastIngr}.`;
}
// const dishes = dishesData.map((dish) => {
//   let ingredientList = [];
//   dish.ingredients.forEach((field) => {
//     const values = Object.values(field);
//     if (Array.isArray(values)) {
//       ingredientList = ingredientList.concat(...values);
//     }
//   });
//   return {
//     dishInfo: dish,
//     ingredientList,
//   };
// });

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

function delay(ms = 1500) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function removeFromStorage(key) {
  localStorage.removeItem(key);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

// function flattenArray(array) {
//   const res = array.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       acc.push(...flattenArray(item));
//     } else {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
//   // console.log(res);
//   return res;
// }
