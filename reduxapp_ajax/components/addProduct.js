import React, { Component } from "react";
class AddProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductId: 0,
      ProductName: "",
      Price: 0,
      CategoryName: "",
      Manufacturer: "",
      Categories: ["Electronics", "Electrical", "Food"],
      Manufacturers: ["AB Tech", "CD Power", "EF Beverages"]
    };
  }

  onChangeProduct(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClickClear(e) {
    this.setState({ ProductId: 0 });
    this.setState({ ProductName: "" });
    this.setState({ Price: 0 });
    this.setState({ CategoryName: "" });
    this.setState({ Manufacturer: "" });
  }
  onClickSave(e) {
    let prd = {
      ProductId: this.state.ProductId,
      ProductName: this.state.ProductName,
      Price: this.state.Price,
      CategoryName: this.state.CategoryName,
      Manufacturer: this.state.Manufacturer
    };
    alert("In Component Add Product  " + JSON.stringify(prd));
    // the props type that will dispatch the
    // action with prd as input parameter
    this.props.onAddProduct(prd);
    this.onClickClear();
  }
  getSelectedProduct(p) {
    this.setState({ ProductId: p.ProductId });
    this.setState({ ProductName: p.ProductName });
    this.setState({ Price: p.Price });
    this.setState({ CategoryName: p.CategoryName });
    this.setState({ Manufacturer: p.Manufacturer });
  }
  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="form-group">
            <label htmlFor="ProductId">ProductId</label>
            <input
              type="text"
              className="form-control"
              name="ProductId"
              value={this.state.ProductId}
              onChange={this.onChangeProduct.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ProductName">ProductName</label>
            <input
              type="text"
              className="form-control"
              name="ProductName"
              value={this.state.ProductName}
              onChange={this.onChangeProduct.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              className="form-control"
              name="Price"
              value={this.state.Price}
              onChange={this.onChangeProduct.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="CategoryName">CategoryName</label>
            <select
              className="form-control"
              value={this.state.CategoryName}
              name="CategoryName"
              onChange={this.onChangeProduct.bind(this)}
            >
              {this.state.Categories.map((c, i) => (
                <Options key={i} data={c} />
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Manufacturer">Manufacturer</label>
            <select
              className="form-control"
              value={this.state.Manufacturer}
              name="Manufacturer"
              onChange={this.onChangeProduct.bind(this)}
            >
              {this.state.Manufacturers.map((c, i) => (
                <Options key={i} data={c} />
              ))}
            </select>
          </div>
          <div className="form-group">
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <td>
                    <input
                      type="button"
                      value="New"
                      className="btn btn-default"
                      onClick={this.onClickClear.bind(this)}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="Save"
                      className="btn btn-success"
                      onClick={this.onClickSave.bind(this)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
// component that will render <option></option>
// the props.data is the data passed from the parent
// of this component
class Options extends Component {
  render() {
    return <option value={this.props.data}>{this.props.data}</option>;
  }
}

export default AddProductComponent;
