import React, { Component } from "react";
class ListProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <td>Product Id</td>
              <td>Product Name</td>
            </tr>
          </thead>
          <tbody>
            {this.props.listproductReducer.map((prd, idx) => (
              <TableRow key={idx} prd={prd} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr>
        <td>{this.props.prd.product.ProductId}</td>
        <td>{this.props.prd.product.ProductName}</td>
      </tr>
    );
  }
}

export default ListProductsComponent;
