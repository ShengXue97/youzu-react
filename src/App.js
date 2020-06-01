import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Edit from './components/Edit';
import Library from './components/Library';
import Settings from './components/Settings';
import Format from './components/Format';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/edit" component={Edit}/>
             <Route path="/library" component={Library}/>
             <Route path="/settings" component={Settings}/>
             <Route path="/format" component={Format}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;