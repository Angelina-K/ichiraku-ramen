const INITIAL_STATE = {
  // robots: null,
  items: [],
  // filterBy: null
};

export function menuItemsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: [...action.items],
      };

    // case 'ADD_ROBOT':
    //     return {
    //         ...state,
    //         robots: [...state.robots, action.robot]
    //     }

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
