// 1. import action types to be used by reducer
import {
    ADD_PRODUCT
} from "./../actions/actions.js";
// 2. standard imports from redux
import {
    combineReducers
} from "redux";

// 3. creating reducer functions.
// note: There can be multiple reducer functions
// one reducer can invoke other reducer
export function addProductReducer(state, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            alert(`In the Add Product reducer ${action.product}`);
            return {
                product: action.product
            };
        default:
            return state;
    }
}

// 4. the reducer, that will call the addProductReducer and will 
// return the state based on added product
// for the first invocation the state is empty
// state will be filled when the product is added 
export function listproductReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT:
            // the state will be immutable by adding new products
            return [...state, addProductReducer(undefined, action)];
        default:
            return state;
    }
}

// 5. combining the reducers. (Note: In our case listproductReducer is 
// calling addProductReducer)
const productReducer = combineReducers({
    listproductReducer
});
// 6. export the combine reducer
export default productReducer;