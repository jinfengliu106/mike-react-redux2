import React, { Component } from 'react';
import MenuDrawer from './components/menu-drawer';
import TopBar from './components/topbar';
import ContentComponent from './components/content/ContentComponent';

import AuthComponent from './components/authentication/AuthComponent';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  render() {
    if(this.isLoggedIn())
      return this.renderLoggedIn();
    else
      return this.renderNotLoggedIn();
  }

  isLoggedIn() {
    return true;
  }

  renderLoggedIn() {
    return (
      <Router>
      <MenuDrawer />
      <div className="page-container">
      <TopBar />
      <ContentComponent />
      </div>
      </Router>
    );
  }

  renderNotLoggedIn() {
    return (
      <AuthComponent/>
    );
  }

}

export default App;
