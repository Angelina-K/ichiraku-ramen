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
