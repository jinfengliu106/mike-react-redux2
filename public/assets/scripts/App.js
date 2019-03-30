import React, { Component } from 'react';
import MenuDrawer from './components/menu-drawer';
import TopBar from './components/topbar';
import ContentComponent from './components/content/ContentComponent';
import AuthComponent from './components/authentication/AuthComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Provider from 'react-redux/es/components/Provider'
import store from './store'

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
      <Provider store={store}>
        <Router>
          <MenuDrawer />
          <div className="page-container">
            <TopBar />
            <ContentComponent />
          </div>
        </Router>
      </Provider>
    );
  }

  renderNotLoggedIn() {
    return (
      <AuthComponent/>
    );
  }

}

export default App;
