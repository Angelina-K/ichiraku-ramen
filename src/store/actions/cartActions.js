export function addToCart(item) {
  return (dispatch) => {
    dispatch({ type: 'ADD_TO_CART', item });
    // dispatch({ type: 'UPDATE_TOTAL_PRICE', price: item.price * item.quantity });
  };
}

export function updateCartItem(item) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_CART_ITEM', item });
  };
}

export function updateTotalPrice(price) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_TOTAL_PRICE', price });
  };
}

export function removeCartItem(itemId) {
  return (dispatch) => {
    dispatch({ type: 'REMOVE_FROM_CART', itemId });
  };
}
