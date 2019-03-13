import React, { Component } from "react";
class AddProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSaveClick(e) {
    // 1. local JSON Object
    let product = {};
    product.ProductId = this.refs.ProductId.value;
    product.ProductName = this.refs.ProductName.value;
    // 2. Logic here to pass the local product object to MainComponent
    this.props.AddProductClick(product);
    // 3. clear textboxes
    this.refs.ProductId.value = "";
    this.refs.ProductName.value = "";
  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="ProductId">Product Id</label>
          <input type="text" className="form-control" ref="ProductId" />
        </div>
        <div className="form-group">
          <label htmlFor="ProductName">Product Name</label>
          <input type="text" className="form-control" ref="ProductName" />
        </div>
        <div className="form-group">
          <input
            type="button"
            value="Add Product"
            className="btn btn-success"
            onClick={this.handleSaveClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default AddProductComponent;
