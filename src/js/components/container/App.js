import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListContainer from './ContactListContainer';
import ContactFormContainer from './ContactFormContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">
            Add Contact
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListContainer}/>
        <Route path="/contacts/new" component={ContactFormContainer}/>
        <Route path="/contacts/edit/:_id" component={ContactFormContainer}/>
      </Container>
    );
  }
}

export default App;
