import React, { Component } from 'react';
import Signin from './Signin';
import Register from './Register';
import Forgot from './Forgot';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AuthComponent extends Component {
  render() {
    return (
      <Router>
               <Route path="/" exact           component={Signin} />
               <Route path="/register" exact    component={Register} />
               <Route path="/forgot" exact component={Forgot} />
      </Router>
    );
  }
}

export default AuthComponent;
