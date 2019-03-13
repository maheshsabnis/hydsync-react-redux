import React, { Component } from "react";
import CreateProduct from "./containers/CreateProduct";
import ProductList from "./containers/ProductList";
import { connect } from "react-redux";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  //   componentDidMount() {
  //     this.state.data = this.props.onLoad(this.state.data);
  //     alert("data " + JSON.stringify(this.state.data));
  //   }
  render() {
    return (
      <div className="container">
        <div className="container">
          <CreateProduct />
        </div>
        <hr />

        <div className="container">
          <ProductList />
        </div>
      </div>
    );
  }
}

export default MainComponent;
