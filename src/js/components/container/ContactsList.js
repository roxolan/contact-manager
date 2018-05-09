import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { contacts: state.contacts };
};

const ConnectedList = ({ contacts }) => (
  <ul className="list-group list-group-flush">
    {contacts.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.name}
      </li>
    ))}
  </ul>
);

const ContactsList = connect(mapStateToProps)(ConnectedList);

export default ContactsList;
