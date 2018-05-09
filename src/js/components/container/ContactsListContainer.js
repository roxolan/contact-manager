import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from '../presentational/ContactList';
import { fetchContacts } from '../../actions/contactActions';

const mapStateToProps = state => {
  return { contacts: state.contactStore.contacts };
};

class ContactListContainer extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts = [] } = this.props;
    return (
        <div>
        <ul className="list-group list-group-flush">
          {contacts.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.first_name} = {el.last_name}
            </li>
          ))}
        </ul>
        <ContactList />
        </div>
    )
  }
}

export default connect(mapStateToProps, {fetchContacts})(ContactListContainer);
