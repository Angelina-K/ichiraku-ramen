import { menuItemsService } from '../../services/menuItemsService';

export function loadMenuItems() {
  return async (dispatch) => {
    try {
      const items = await menuItemsService.query();

      dispatch({ type: 'SET_ITEMS', items });
    } catch (err) {
      console.log(err);
    }
  };
}

export async function getById(id) {
  const item = await menuItemsService.getById(id);
  return item;
}
