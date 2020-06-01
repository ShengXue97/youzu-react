import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import express from 'express';

import Home from './components/Home';
import Edit from './components/Edit';
import Library from './components/Library';
import Settings from './components/Settings';
import Format from './components/Format';

class App extends Component {
  render() {

    return (      
      <HashRouter basename="/">
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/edit" component={Edit} />
          <Route path="/library" component={Library} />
          <Route path="/settings" component={Settings} />
          <Route path="/format" component={Format} />
        </div>
      </HashRouter>
    );
  }
}
 
export default App;