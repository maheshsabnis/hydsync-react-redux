import { ADD_PRODUCT, LIST_PRODUCTS } from "./../actions/types";

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case LIST_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
