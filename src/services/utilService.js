export const utilService = {
  delay,
  getRandomInt,
  makeId,
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
  getIngredientList,
  getFormFields,
};

function getFormFields(formType) {
  let formFields;
  if (formType === 'delivery') {
    formFields = [
      {
        fieldName: 'Name',
        type: 'text',
        isRequired: true,
      },
      {
        fieldName: 'Phone',
        type: 'tel',
        isRequired: true,
      },
      {
        fieldName: 'Address',
        type: 'text',
        isRequired: true,
      },
    ];
  }
  // console.log(formFields);
  return formFields;
}

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
}

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
