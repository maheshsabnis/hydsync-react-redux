import React from "react";
import { connect } from "react-redux";
//import { listAllProducts } from "./../actions";
// import ListProductComponent from "../components/listProducts";
function ProductList({ productsReducer }) {
  if (!productsReducer.length) {
    return <div>No Products</div>;
  }
  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <td>ProductId</td>
            <td>ProductName</td>
            <td>Price</td>
            <td>CategoryName</td>
            <td>Manufacturer</td>
          </tr>
        </thead>
        <tbody>
          {productsReducer.map(prd => (
            //console.log(JSON.stringify(prd.product.data));
            <tr key={prd.product.data.ProductId}>
              <td>{prd.product.data.ProductId}</td>
              <td>{prd.product.data.ProductName}</td>
              <td>{prd.product.data.Price}</td>
              <td>{prd.product.data.CategoryName}</td>
              <td>{prd.product.data.Manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    productsReducer: state.productsReducer
  };
};

export default connect(mapStateToProps)(ProductList);
