import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      first_name: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { first_name } = this.state;

    return (
      <form id="contact-form">
        <Input
          text="First Name"
          label="first_name"
          type="text"
          id="first_name"
          value={first_name}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

const wrapper = document.getElementById("create_contact_form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
