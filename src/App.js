import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Options, Game, Results } from './Pages';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Router>
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route path ='/options' component={Options} />
            <Route path ='/game' component={Game} />
            <Route path ='/results' component={Results} />
          </Switch>
        </Router>
      </div>
    );
  };
};

export default App;