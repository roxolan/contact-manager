import React, { Component } from "react";
import ReactDOM from "react-dom";

class ContactsContainer extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { name: 'John Smith', id: 1, email: 'js@tt.com' },
        { name: 'Patrick Killough', id: 2, email: 'pk@tt.com' }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return <ul>{contacts.map(el => <li key={el.id}>{el.name} - {el.email}</li>)}</ul>;
  }
}

export default ContactsContainer;
const wrapper = document.getElementById("contact_list");
wrapper ? ReactDOM.render(<ContactsContainer />, wrapper) : false;
ReactDOM.render(<ContactsContainer />, wrapper);
