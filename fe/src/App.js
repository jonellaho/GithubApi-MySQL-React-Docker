import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

import PrivateRoute from "./Utils/PrivateRoute";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
          </div>
          <div className="content">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/login"   component={Login} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
