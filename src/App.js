import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AccountDetails from './views/AccountDetails';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
    <Router>
      <Route path="/" exact component={AccountDetails} />
    </Router>
  </div>
);

export default App;
