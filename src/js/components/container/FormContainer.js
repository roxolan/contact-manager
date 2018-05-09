import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input';

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { name } = this.state;

    return (
      <form id="contact_form">
        <Input
          text="Name"
          label="name"
          type="text"
          id="name"
          value={name}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

const wrapper = document.getElementById("create_contact_form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
