import { ADD_PRODUCT, LIST_PRODUCTS } from "./types";
import axios from "axios";

const servUrl = "http://localhost:4070/api/products";
// action creator
export const createProduct = product => {
  // reading values received from action dispatch request
  // from UI
  var ProductId = product.ProductId;
  var ProductName = product.ProductName;
  var CategoryName = product.CategoryName;
  var Manufacturer = product.Manufacturer;
  var Price = product.Price;
  // MIME type mandatory for POST and PUT Requests
  var headers = {
    "Content-Type": "application/json"
  };
  // return dispatch that will
  // return callback back to data to the component
  // who is dispatching the request
  return dispatch => {
    return axios
      .post(
        `${servUrl}`,
        { ProductId, ProductName, CategoryName, Manufacturer, Price },
        { headers: headers }
      )
      .then(response => {
        dispatch(createProductSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

// action return types with payload (if required)
// payload is the input to action creator when
// it is dispatched
export const createProductSuccess = data => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product: data
    }
  };
};
// action return types with payload (if required)
export const listProductsSuccess = products => {
  return {
    type: LIST_PRODUCTS,
    products
  };
};
// action creator
export const listAllProducts = () => {
  return dispatch => {
    return axios
      .get(servUrl)
      .then(response => {
        // alert("List all products called" + JSON.stringify(response.data));
        dispatch(listProductsSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
