export function addToCart(item) {
  return async (dispatch) => {
    await dispatch({ type: 'ADD_TO_CART', item });
    dispatch({ type: 'UPDATE_TOTAL_PRICE' });
  };
}

export function updateCartItem(item) {
  return async (dispatch) => {
    await dispatch({ type: 'UPDATE_CART_ITEM', item });
    dispatch({ type: 'UPDATE_TOTAL_PRICE' });
  };
}

export function removeCartItem(itemId) {
  return async (dispatch) => {
    await dispatch({ type: 'REMOVE_FROM_CART', itemId });
    dispatch({ type: 'UPDATE_TOTAL_PRICE' });
  };
}

export function clearCart() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_CART' });
  };
}
