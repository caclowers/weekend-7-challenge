import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

//import all view Components
import Admin from '../Admin/Admin.js';
import Comments from '../Comments/Comments.js';
import Confirmation from '../Confirmation/Confirmation.js';
import Feeling from '../Feeling/Feeling.js';
import Header from '../Header/Header.js';
import Support from '../Support/Support.js';
import Understanding from '../Understanding/Understanding.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Header />
            <Redirect exact from="/" to="select" />
            <Route path="/" component={Admin} />
            <Route path="/" component={Comments} />
            <Route path="/" component={Confirmation} />
            <Route path="/" component={Feeling} />
            <Route path="/" component={Support} />
            <Route path="/" component={Understanding} />
            <br />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
