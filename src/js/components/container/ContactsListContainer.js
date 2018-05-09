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
          <h1>List of Contacts</h1>
          <ContactList contacts={this.props.contacts} />
        </div>
    )
  }
}

export default connect(mapStateToProps, {fetchContacts})(ContactListContainer);
