import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AccountDetails from './views/AccountDetails';
import Home from './views/Home';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/:address" component={AccountDetails} />
    </Router>
  </div>
);

export default App;
