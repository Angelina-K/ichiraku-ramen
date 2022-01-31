const INITIAL_STATE = {
  // robots: null,
  cartItems: [],
  // filterBy: null
};

export function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.item],
      };

    case 'UPDATE_CART_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.item.id ? action.item : item
        ),
      };

    // case 'REMOVE_ROBOT':
    //     return {
    //         ...state,
    //         robots: state.robots.filter(robot => robot._id !== action.robotId)
    //     }

    // case 'UPDATE_ROBOT':
    //     return {
    //         ...state,
    //         robots: state.robots.map(robot => robot._id === action.robot._id ? action.robot : robot)
    //     }
    // case 'SET_FILTER_BY':
    //     return {
    //         ...state,
    //         filterBy: {...action.filterBy}
    //     }

    default:
      return state;
  }
}
