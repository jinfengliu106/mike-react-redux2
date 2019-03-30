import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MenuDrawer extends Component {
  render() {
    return (
  <div className="sidebar">
   <div className="sidebar-inner">
     <ul className="sidebar-menu scrollable pos-r">
       <li className="nav-item mT-30 active">
         <Link className="sidebar-link" to="/">
           <span className="icon-holder">
             <i className="c-blue-500 ti-home" />
           </span>
           <span className="title">Dashboard</span>
         </Link>
       </li>
       <li className="nav-item">
         <Link className="sidebar-link" to="/connections/">
           <span className="icon-holder">
             <i className="c-brown-500 ti-settings" />
           </span>
           <span className="title">Connections</span>
         </Link>
       </li>
       <li className="nav-item">
         <Link className="sidebar-link" to="/email-templates/">
           <span className="icon-holder">
             <i className="c-blue-500 ti-share" />
           </span>
           <span className="title">Email templates</span>
         </Link>
       </li>
       <li className="nav-item">
         <Link className="sidebar-link" to="/email-stats/">
           <span className="icon-holder">
             <i className="c-deep-orange-500 ti-stats-up" />
           </span>
           <span className="title">Email stats</span>
         </Link>
       </li>
     </ul>
   </div>
 </div>
    );
  }
}

export default MenuDrawer;
