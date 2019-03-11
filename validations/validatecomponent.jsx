import React, { Component } from "react";

class ValidateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PersonId: 0,
      PersonName: "",
      showErrorId: false,
      showErrorName: false,
      errorMessageId: "",
      errorMessageName: ""
    };
  }
  handleChanges(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.validate(e.target.name, e.target.value);
  }
  validate(name, value) {
    if (name == "PersonId") {
      if (value.length < 0 || value < 0) {
        this.setState({ showErrorId: true });
        this.setState({ errorMessageId: "Person Id is Must and Must be +Ve" });
      } else {
        this.setState({ showErrorId: false });
      }
    }

    if (name == "PersonName") {
      if (value.length <= 0) {
        this.setState({ showErrorName: true });
        this.setState({
          errorMessageName: "Person Name is"
        });
      } else {
        this.setState({ showErrorName: false });
      }
    }
  }
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <label htmlFor="PersonId">Id</label>
          <input
            type="text"
            name="PersonId"
            className="form-control"
            value={this.state.PersonId}
            onChange={this.handleChanges.bind(this)}
          />
          <div className="alert alert-danger" hidden={!this.state.showErrorId}>
            {this.state.errorMessageId}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="PersonName">Person Name</label>
          <input
            type="text"
            name="PersonName"
            className="form-control"
            value={this.state.PersonName}
            onChange={this.handleChanges.bind(this)}
          />
          <div
            className="alert alert-danger"
            hidden={!this.state.showErrorName}
          >
            {this.state.errorMessageName}
          </div>
        </div>
        <div className="form-group">
          <input type="button" value="New" />
        </div>
      </div>
    );
  }
}

export default ValidateComponent;
