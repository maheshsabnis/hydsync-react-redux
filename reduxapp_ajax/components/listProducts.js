import React, { Component } from "react";

class ListProductComponent extends Component {
  constructor(props) {
    super(props);
    alert("In ListProductComponent" + JSON.stringify(this.props.products));
  }
  // getProductsData() {
  //   this.props.onGetProducts(this.props.products);
  // }
  render() {
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
            {this.props.products.map((prd, idx) => {
              <tr>
                <td>{prd.ProductId}</td>
                <td>{prd.ProductName}</td>
                <td>{prd.Price}</td>
                <td>{prd.CategoryName}</td>
                <td>{prd.Manufacturer}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListProductComponent;
