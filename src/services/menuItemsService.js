import { firebaseService } from './firebaseService';

export const menuItemsService = {
  query,
  getById,
  getRamenIngredients,
  getEmptyRamen,
  // save,
  // remove,
  // getEmpty,
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
// function remove(id) {
//     const idx = gRobots.findIndex(robot => robot._id === id)
//     gRobots.splice(idx, 1)
//     if (!gRobots.length) gRobots = gDefaultRobots.slice()
//     storageService.store(STORAGE_KEY, gRobots)
//     return Promise.resolve()
// }

// function save(robotToSave) {
//     if (robotToSave._id) {
//         const idx = gRobots.findIndex(robot => robot._id === robotToSave._id)
//         gRobots.splice(idx, 1, robotToSave)
//     } else {
//         robotToSave._id = makeId()
//         gRobots.push(robotToSave)
//     }
//     storageService.store(STORAGE_KEY, gRobots)
//     return Promise.resolve(robotToSave);
// }

// function getEmptyRobot() {
//     return {
//         model: '',
//         type: '',
//         batteryStatus: 100
//     }
// }
function getEmptyRamen() {
  return {
    name: 'Your ramen',
    description: 'Create your ramen bowl',
    price: 10,
    imgUrl:
      'https://res.cloudinary.com/dmxsqwvwv/image/upload/v1643702176/ramen-shop/kisspng-ramen-japanese-cuisine-soup-chinese-cuisine-bowl-vector-japanese-noodles-5a8c3f8f33d175.7286532915191407512123_lyltbe.png',
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
