import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'

class EmailTemplatesComponent extends Component {


  render() {
      const divStyle={
              overflowY: 'scroll'
            };

    return (
      <main className="main-content bgc-grey-100">
        <div id="mainContent">
          <div className="full-container">
            <div className="email-app">
              <div className="email-side-nav remain-height ov-h">
                <div className="h-100 layers">
                  <div className="p-20 bgc-grey-100 layer w-100">
                    <Link className="btn btn-danger btn-block" to="/new-email-template/">New Email Template</Link>
                  </div>
                  <div className="scrollable pos-r bdT layer w-100 fxg-1" style={divStyle}>
                    <ul className="p-20 nav flex-column">
                      <li className="nav-item">

                        <Link className="nav-link c-grey-800 cH-blue-500 active" to="/connections/">
                          <div className="peers ai-c jc-sb">
                            <div className="peer peer-greed">
                              <span>RealEstateForm2Gmail</span>
                            </div>
                            <div className="peer">
                              <span className="badge badge-pill bgc-deep-purple-50 c-deep-purple-700">102 sent</span>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <PerfectScrollbar>
              <div className="email-wrapper row remain-height bgc-white ov-h">
                <div className="email-content h-100">
                  <div className="h-100 scrollable pos-r" style={divStyle}>
                    <div className="bgc-grey-100 peers ai-c jc-sb p-20 fxw-nw d-n@md+">
                      <div className="peer">
                        <div className="btn-group" role="group">
                          <button type="button" className="back-to-mailbox btn bgc-white bdrs-2 mR-3 cur-p">
                            <i className="ti-angle-left" />
                          </button>
                          <button type="button" className="btn bgc-white bdrs-2 mR-3 cur-p">
                            <i className="ti-folder" />
                          </button>
                          <button type="button" className="btn bgc-white bdrs-2 mR-3 cur-p">
                            <i className="ti-tag" />
                          </button>
                          <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" className="btn cur-p bgc-white no-after dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="ti-more-alt" />
                            </button>
                            <ul className="dropdown-menu fsz-sm" aria-labelledby="btnGroupDrop1">
                              <li>
                                <Link to="/connections" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                  <i className="ti-trash mR-10" />
                                  <span>Delete</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                  <i className="ti-alert mR-10" />
                                  <span>Mark as Spam</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                  <i className="ti-star mR-10" />
                                  <span>Star</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="peer">
                        <div className="btn-group" role="group">
                          <button type="button" className="fsz-xs btn bgc-white bdrs-2 mR-3 cur-p">
                            <i className="ti-angle-left" />
                          </button>
                          <button type="button" className="fsz-xs btn bgc-white bdrs-2 mR-3 cur-p">
                            <i className="ti-angle-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="email-content-wrapper">
                      {/* Header */}
                      <div className="peers ai-c jc-sb pX-40 pY-30">
                        <div className="peers peer-greed">
                          <div className="peer mR-20">
                            <img className="bdrs-50p w-3r h-3r" src="https://randomuser.me/api/portraits/men/11.jpg" />
                          </div>
                          <div className="peer">
                            <small>Template created on Nov, 02 2017</small>
                            <h5 className="c-grey-900 mB-5">John Doe</h5>
                            <span>Connected email: email@gmail.com</span><br />
                            <span>Connected form: RealEstateForm2Gmail</span><br />
                            <span>Behaviour: Sends right away</span>
                          </div>
                          <div className="peer">
                            <button type="button" className="btn cur-p btn-danger">Delete</button>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="bdT pX-40 pY-30">
                        <h4>Title of this email goes here</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </main>
    );
}
}

export default EmailTemplatesComponent;
