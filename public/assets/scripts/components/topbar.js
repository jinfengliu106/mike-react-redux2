import React, { Component } from 'react';

class TopBar extends Component {
  render() {

return (
      <div className="header navbar">
        <div className="header-container">
          <ul className="nav-left">
          </ul>
          <ul className="nav-right">
            <li className="dropdown">
              <a className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                <div className="peer mR-10">
                  <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg"   />
                </div>
                <div className="peer">
                  <span className="fsz-sm c-grey-900">John Doe</span>
                </div>
              </a>
              <ul className="dropdown-menu fsz-sm">
                <li>
                  <a className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                    <i className="ti-power-off mR-10" />
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopBar;
