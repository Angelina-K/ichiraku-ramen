const INITIAL_STATE = {
  cartItems: [],
  totalPrice: 0,
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
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.itemId),
      };
    case 'UPDATE_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: state.cartItems.reduce((acc, item) => {
          console.log(acc, item.quantity);
          return acc + item.price * item.quantity;
        }, 0),
      };
    case 'CLEAR_CART':
      return {
        state,
        cartItems: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
}
