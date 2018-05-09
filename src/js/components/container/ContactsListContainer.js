import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from '../presentational/ContactList'

const mapStateToProps = state => {
  return { contacts: state.contacts };
};

class ContactListContainer extends Component {
  render() {
    const { contacts = [] } = this.props;
    return (
        <div>
        <ul className="list-group list-group-flush">
          {contacts.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.name}
            </li>
          ))}
        </ul>
        <ContactList />
        </div>
    )
    // add ContactList
  }
}

export default connect(mapStateToProps)(ContactListContainer);
