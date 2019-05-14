import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Counter from './Components/Counter';
import Timer from './Components/Timer';
import api from './Components/API';
import Navigation from './Components/Navigation';
import axios from 'axios';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/counter" component={Counter} />
              <Route path="/timer" component={Timer}/>
              <Route path="/myapi" component={api}/>
            </Switch>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;