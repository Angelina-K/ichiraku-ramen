export const utilService = {
  makeId,
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
  getIngredientList,
  getFormFields,
  getMenuIcons,
  getResponsiveConfiguration,
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
  return formFields;
}

function getIngredientList(dish) {
  const ingredients = dish.ingredients;
  let list = [];
  if (!Array.isArray(ingredients)) {
    for (const key in ingredients) {
      list = list.concat(ingredients[key]);
    }
  } else {
    list.push(...ingredients);
  }

  if (list[1]) {
    const lastIngr = list.pop();
    return `${list.join(', ')} and ${lastIngr}  `;
  } else {
    return list;
  }
}

function getMenuIcons() {
  return [
    {
      imgUrl:
        'https://res.cloudinary.com/dmxsqwvwv/image/upload/v1644092847/ramen-shop/sushi_owoo4q.png',
      description: 'Sushi ',
      type: 'sushi',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dmxsqwvwv/image/upload/v1644092848/ramen-shop/ramen_fkwmjk.png',
      description: 'Ramen ',
      type: 'ramen',
    },
    {
      imgUrl:
        'https://res.cloudinary.com/dmxsqwvwv/image/upload/v1644259414/ramen-shop/kettle-nobg_rblyec.png',
      description: 'Drinks',
      type: 'drink',
    },
  ];
}

function getResponsiveConfiguration() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return responsive;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
}

function removeFromStorage(key) {
  localStorage.removeItem(key);
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
