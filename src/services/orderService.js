import { firebaseService } from './firebaseService';
export const orderService = {
  getEmptyOrder,
  saveOrder,
};

async function saveOrder(order) {
  await firebaseService.addToCollection('order', order);
}

function getEmptyOrder() {
  return {
    costumer: {},
    items: [],
    timeStamp: Date.now(),
    totalPrice: 0,
  };
}
