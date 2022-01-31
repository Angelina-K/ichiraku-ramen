import { menuItemsService } from '../../services/menuItemsService';

export function loadMenuItems() {
  return async (dispatch) => {
    // const { filterBy } = getState().robotModule
    try {
      const items = await menuItemsService.query();

      dispatch({ type: 'SET_ITEMS', items });
    } catch (err) {
      console.log(err);
    }
  };
}

// export function removeRobot(robotId) {
//     return async (dispatch) => {
//         try {
//             await robotService.remove(robotId)
//             dispatch({ type: 'REMOVE_ROBOT', robotId })
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

// export function setFilterBy(filterBy) {
//     return async (dispatch) => {
//         dispatch({ type: 'SET_FILTER_BY', filterBy })
//     }
// }

export async function getById(id) {
  // return async (dispatch, getState) => {
  // const dish = getState().dishModule;
  // .find((dish) => dish.id === id);
  // return dish;
  // };
  const item = await menuItemsService.getById(id);
  return item;
}
