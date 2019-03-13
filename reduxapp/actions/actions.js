// 1. Create a Action Type as Constant
// Action Type --> This is the name that will be used by 
// reducer for updating that state in the store
export const ADD_PRODUCT = "ADD_PRODUCT";

// 2. The action creator function. This will contains logic
// that is to be executed when the action dispatch request
// is received from React-View
// 2a. This function will accept the parameter from view
// this is also known as 'PAYLOAD'
// 2b. This function will return the type object aka JSON
// this is consist of ACTION_TYPE and the processed PAYLOAD 
export function addProduct(product) {
    alert(`In Action Method ${JSON.stringify(product)}`);
    // logic to modify the payload
    return {
        type: ADD_PRODUCT,
        product
    };
}