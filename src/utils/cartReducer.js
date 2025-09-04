export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return [...state, payload];
    case "CHANGE_ITEM_QUANTITY":
      return payload.quantity > 0
        ? state.map((val) =>
            val.id === payload.id ? { ...val, quantity: payload.quantity } : val
          )
        : state.filter((val) => val.id !== payload.id);
    case "REMOVE_ITEM":
      return state.filter((val) => val.id !== payload.id);
    default:
      return state;
  }
};
