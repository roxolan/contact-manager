import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addContact } from "../../actions/index";
import Input from "../presentational/Input";

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const id = uuidv1();
    this.props.addContact({ name, id });
    this.setState({ name:  "" });
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          text="Name"
          label="name"
          type="text"
          id="name"
          value={name}
          handleChange={this.handleChange}
        />
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
