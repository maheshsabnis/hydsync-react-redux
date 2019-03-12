import React, { Component } from "react";
const Categories = ["ECTS", "ECLS", "FOOD"];
const Manufacturers = ["MS Tech", "LS Power", "TS Food"];

class ProductUIComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductId: 0,
      ProductName: "",
      BasePrice: 0,
      CategoryName: "",
      Manufacturer: "",
      Description: "",
      Categories: Categories,
      Manufacturers: Manufacturers,
      Products: [],
      errorMessageid: "",
      errorMessagename: "",
      errorMessageprice: "",
      errorMessagedesc: "",
      showid: false,
      showname: false,
      showprice: false,
      showdesc: false
    };
  }
  // single method to listen change event for each UI element
  handleValueChanges(e) {
    // set state properties based on values from input and select element
    this.setState({ [e.target.name]: e.target.value });
    this.validate(e.target.name, e.target.value);
  }
  // ends here
  handleClearValues(e) {
    this.setState({ ProductId: 0 });
    this.setState({ ProductName: "" });
    this.setState({ BasePrice: 0 });
    this.setState({ CategoryName: "" });
    this.setState({ Manufacturer: "" });
    this.setState({ Description: "" });
  }
  handleSaveClick(e) {
    // 1. define a temporary array having same schema of products
    let tempArray = this.state.Products.slice();
    // 2. push the data in the tempArray
    tempArray.push({
      ProductId: this.state.ProductId,
      ProductName: this.state.ProductName,
      BasePrice: this.state.BasePrice,
      CategoryName: this.state.CategoryName,
      Manufacturer: this.state.Manufacturer,
      Description: this.state.Description
    });
    // 3. update the state of products array
    this.setState({ Products: tempArray });
  }
  // method to set state properties for Product Data
  getProduct(prd) {
    this.setState({ ProductId: prd.ProductId });
    this.setState({ ProductName: prd.ProductName });
    this.setState({ BasePrice: prd.BasePrice });
    this.setState({ CategoryName: prd.CategoryName });
    this.setState({ Manufacturer: prd.Manufacturer });
    this.setState({ Description: prd.Description });
  }

  validate(name, value) {
    if (name == "ProductId") {
      if (value < 0) {
        this.setState({ showid: true });

        this.setState({ errorMessageid: "Product Id Cannot be Negative" });
      } else {
        this.setState({ showid: false });
      }
    }
    if (name == "ProductName") {
      if (value.length <= 0) {
        this.setState({ showname: true });
        this.setState({
          errorMessagename: "Product Name Must be required and must be string"
        });
      } else {
        this.setState({ showname: false });
        his.setState({ errorMessages: tempMessages });
      }
    }
    this.setState({ errorMessages: tempMessages });
  }
  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="form-group">
            <label htmlFor="ProductId">ProductId</label>
            <input
              type="text"
              name="ProductId"
              className="form-control"
              value={this.state.ProductId}
              onChange={this.handleValueChanges.bind(this)}
            />
            {
              <div className="alert alert-danger" hidden={!this.state.showid}>
                {this.state.errorMessageid}
              </div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="ProductName">ProductName</label>
            <input
              type="text"
              name="ProductName"
              className="form-control"
              value={this.state.ProductName}
              onChange={this.handleValueChanges.bind(this)}
            />
            {
              <div className="alert alert-danger" hidden={!this.state.showname}>
                {this.state.errorMessagename}
              </div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="BasePrice">Base Price</label>
            <input
              type="text"
              name="BasePrice"
              className="form-control"
              value={this.state.BasePrice}
              onChange={this.handleValueChanges.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="CategoryName">CategoryName</label>
            <select
              name="CategoryName"
              className="form-control"
              value={this.state.CategoryName}
              onChange={this.handleValueChanges.bind(this)}
            >
              <option>Select Category Name</option>
              {this.state.Categories.map((val, idx) => (
                <Options key={idx} data={val} />
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Manufacturer">Manufacturer</label>
            <select
              name="Manufacturer"
              className="form-control"
              value={this.state.Manufacturer}
              onChange={this.handleValueChanges.bind(this)}
            >
              <option>Select Manufacturer</option>
              {this.state.Manufacturers.map((val, idx) => (
                <Options key={idx} data={val} />
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              name="Description"
              className="form-control"
              value={this.state.Description}
              onChange={this.handleValueChanges.bind(this)}
            />
          </div>
          <div className="form-group">
            <input
              type="button"
              value="New"
              className="btn btn-default"
              onClick={this.handleClearValues.bind(this)}
            />
            <input
              type="button"
              value="Save"
              className="btn btn-success"
              onClick={this.handleSaveClick.bind(this)}
            />
          </div>
        </div>
        <div className="container">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <td>ProductId</td>
                <td>Product Name</td>
                <td>Base Price</td>
                <td>Category Name</td>
                <td>Manufacturer</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              {this.state.Products.map((prd, idx) => (
                <TableRow
                  key={idx}
                  product={prd}
                  selectedProduct={this.getProduct.bind(this)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class Options extends Component {
  render() {
    return <option value={this.props.data}>{this.props.data}</option>;
  }
}

class TableRow extends Component {
  constructor(props) {
    super(props);
  }
  handleRowClick(e) {
    // using selectedProduct() props type function to which
    // the props product is passed
    this.props.selectedProduct(this.props.product);
  }
  render() {
    return (
      <tr onClick={this.handleRowClick.bind(this)}>
        <td>{this.props.product.ProductId}</td>
        <td>{this.props.product.ProductName}</td>
        <td>{this.props.product.BasePrice}</td>
        <td>{this.props.product.CategoryName}</td>
        <td>{this.props.product.Manufacturer}</td>
        <td>{this.props.product.Description}</td>
      </tr>
    );
  }
}

export default ProductUIComponent;
