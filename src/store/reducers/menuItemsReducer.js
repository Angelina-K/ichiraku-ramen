const INITIAL_STATE = {
  items: [],
};

export function menuItemsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: [...action.items],
      };

    default:
      return state;
  }
}
