import { firebaseService } from './firebaseService';

export const menuItemsService = {
  query,
  getById,
  getRamenIngredients,
  getEmptyRamen,
};

async function query(filterBy = null) {
  try {
    const items = await firebaseService.getCollection('dish');

    return items;
  } catch (err) {
    console.log(err);
  }
}

async function getById(id) {
  const item = await firebaseService.getItem('dish', id);
  return item;
}

function getEmptyRamen() {
  return {
    name: 'Your ramen',
    description:
      'Ramen broth is most labour intensive, from prep to finishing stock usually take around 36 hours total.  Noodles are always handmade.  Finally finish with your choice of unlimited toppings.',
    price: 10,
    imgUrl:
      'https://res.cloudinary.com/dmxsqwvwv/image/upload/v1644231188/ramen-shop/eating-flavor-noodle-nutrition-health-egg-noodles-0606f234fa8488920f1759ab8699743a_ymyi0s.png',
    ingredients: {
      broth: '',
      noodles: '',
      toppings: [],
    },
  };
}

function getRamenIngredients() {
  return {
    broth: ['shoyu', 'salt', 'miso', 'tonkotsu'],
    noodles: ['soba noodles', 'somen noodles', 'udon noodles'],
    toppings: [
      'dried seaweed',
      'sesame seeds',
      'mushrooms',
      'pepper',
      'corn',
      'butter',
      'peanuts',
      'pickled ginger',
      'spring onions',
      'tofu',
      'narutomaki',
      'tamago',
      'spinach',
      'meatballs',
      'menma bamboo',
      'chicken',
      'beef',
    ],
    extraToppings: ['chicken', 'beef', 'meatballs'],
    extraPrice: 3.5,
  };
}
