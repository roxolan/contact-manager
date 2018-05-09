import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/container/App';
import ContactsList from './components/container/ContactsList';
import Form from './components/container/Form';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ContactsList} />
      <Route path="contacts" component={ContactsList}>
        <Route path=":id" component={Form} />
      </Route>
    </Route>
  </Router>
)
