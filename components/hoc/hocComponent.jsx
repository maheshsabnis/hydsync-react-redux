import React, { Component } from "react";
// the HOCComponent accepts the input parameter as
// Comoponent and returns component
export default function HOCComponent(MyComponent, data) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sourceData: data
      };
    }
    
    render() {
      return <MyComponent data={this.state.sourceData} />;
    }
  };
}
