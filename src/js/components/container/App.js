import React, { Component } from 'react';
import ContactListContainer from './ContactListContainer';
import Form from './Form';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Contacts List :::</h2>
      <ContactListContainer />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>-> Add a New Contact</h2>
      <Form />
    </div>
  </div>
);
export default App;
