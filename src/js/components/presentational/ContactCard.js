import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';


export default function ContactCard({contact, deleteContact}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='user outline'/> {contact.first_name} {contact.last_name}
        </Card.Header>
        <Card.Description>
          <p><Icon name='phone'/> {contact.phone}</p>
          <p><Icon name='mail outline'/> {contact.email}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Edit</Button>
          <Button basic color="red">Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired
}
