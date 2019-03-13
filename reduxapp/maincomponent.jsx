import React, { Component } from "react";
import AddProductComponent from "./components/addproductcomponent.jsx";
import ListProductsComponent from "./components/listproductcomponent.jsx";
// import 'connect()' from react-redux
import { connect } from "react-redux";
// importing action-creator
import { addProduct } from "./actions/actions.js";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // 1. define the local prop types so that they can be used by the
    // AddProductComponent and ListProductComponent
    // note: I am using destructuring syntax of ES 6
    // the 'distapch' will be the method type property
    // the 'visibleproducts' will be the array type property
    const { dispatch, visibleproducts } = this.props;
    // the 'AddProductClick' will be used to dispatch request
    // to the addProduct() action-creator with 'product' as a payload
    return (
      <div className="container">
        <h2>Add Product</h2>
        <AddProductComponent
          AddProductClick={product => dispatch(addProduct(product))}
        />
        <hr />
        <h2>List Products</h2>
        <ListProductsComponent listproductReducer={visibleproducts} />
      </div>
    );
  }
}

// method to map state-to-props
function mapStateToProps(state) {
  return {
    visibleproducts: state.listproductReducer
  };
}
// Map all states from all child components to props of MainComponent
export default connect(mapStateToProps)(MainComponent);

//export default MainComponent;
