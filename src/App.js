import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
 

import Home from './components/Home';
import Edit from './components/Edit';
import Library from './components/Library';
import Database from './components/Database';
import Settings from './components/Settings';
import Changelog from './components/Changelog';

class App extends Component {
  render() {
    return (      
      <HashRouter basename="/">
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/edit" component={Edit} />
          <Route path="/library" component={Library} />
          <Route path="/database" component={Database} />
          <Route path="/settings" component={Settings} />
          <Route path="/changelog" component={Changelog} />
        </div>
      </HashRouter>
    );
  }
}
 
export default App;