export function addToCart(item) {
  return (dispatch) => {
    dispatch({ type: 'ADD_TO_CART', item });
  };
}

export function updateCartItem(item) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_CART_ITEM', item });
  };
}
