import React, { Component } from "react";
import PropTypes from "prop-types";
class PropTypesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contaimner">
        <h2>Demo PropTypes</h2>
        <div className="container">{this.props.name}</div>
      </div>
    );
  }
}

PropTypesComponent.propTypes = {
  name: PropTypes.string
};
export default PropTypesComponent;
