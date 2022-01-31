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
    broth: '',
    noodles: '',
    toppings: [],
    price: 10,
  };
}
function getRamenIngredients() {
  return {
    broth: ['shoyu', 'salt', 'miso', 'tonkotsu'],
    noodles: ['soba', 'somen', 'udon'],
    toppings: [
      'dried seaweed',
      'mushrooms',
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
