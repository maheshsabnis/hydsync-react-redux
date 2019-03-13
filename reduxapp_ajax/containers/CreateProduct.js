// use connect() to map state to props ans also
// dispatch actions from component's UI
import { connect } from "react-redux";
// importing action creators
import { createProduct } from "../actions";
// the actual component
import AddProductComponent from "../components/addProduct";

const mapDispatchToProps = dispatch => {
  return {
    // props type that have product as input parameters
    // this props type will dispatch
    // action for createProduct() action creator
    onAddProduct: product => {
      dispatch(createProduct(product));
    }
  };
};
// the connect() will map the dispatch to
// AddProductComponent
export default connect(
  null,
  mapDispatchToProps
)(AddProductComponent);
