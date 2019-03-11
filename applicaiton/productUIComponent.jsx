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
      Products: []
    };
  }
  // single method to listen change event for each UI element
  handleValueChanges(e) {
    // set state properties based on values from input and select element
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClearValues(e) {
    this.setState({ ProductId: 0 });
    this.setState({ ProductName: "" });
    this.setState({ BasePrice: 0 });
    this.setState({ CategoryName: "" });
    this.setState({ Manufacturer: "" });
    this.setState({ Description: "" });
  }
  // ends here
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
            <input type="button" value="Save" className="btn btn-success" />
          </div>
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

export default ProductUIComponent;
