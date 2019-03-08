import React, { Component } from "react";
import ExternalComponent from "./externalcomponent.jsx";

class SimpleComponent extends Component {
  // the render()
  // returns HTML DOM object with only Single Parent
  render() {
    return (
      <div>
        <h2>Hello World!!!!!!!!!! </h2>
        <h3>{this.props.message}</h3>
        <ChildComponent />
        <hr />
        <ExternalComponent />
      </div>
    );
  }
}

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h3>I am a Child Component</h3>
      </div>
    );
  }
}

export default SimpleComponent;
