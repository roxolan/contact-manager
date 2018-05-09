import React from 'react';
import { Card } from 'semantic-ui-react';
import ContactCard from './contactCard';

const ContactList = ({contacts}) => {

  const cards = () => {
    return contacts.map(contact => {
      return (
        <ContactCard key={contact.id} contact={contact}/>
      )
    })
  }

  return (
    <Card.Group>
      { cards() }
    </Card.Group>
  )
}

export default ContactList;
