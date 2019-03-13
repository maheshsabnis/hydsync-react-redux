import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
// return the productsReducer and hence the state update
// in the store will be exported to all
// subscribers of the store
export default combineReducers({
  productsReducer: productsReducer
});
