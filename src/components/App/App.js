import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

//import all view Components
import Admin from '../Admin/Admin.js';
import Comments from '../Comments/Comments.js';
import Confirmation from '../Confirmation/Confirmation.js';
import Feelings from '../Feelings/Feelings.js';

import Support from '../Support/Support.js';
import Understanding from '../Understanding/Understanding.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route exact path="/" component={Feelings} />
            <Route path="/2" component={Understanding} />
            <Route path="/3" component={Support} />
            <Route path="/4" component={Comments} />
            <Route path="/5" component={Confirmation} />
          </Switch>
          <p>hi</p>
        </div>
      </Router>
    );
  }
}

export default App;
