import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (

      <div className="peers ai-s fxw-nw h-100vh">
        <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{backgroundImage: 'url("assets/static/images/bg.jpg")'}}>
        </div>
        <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{minWidth: '320px'}}>
          <h4 className="fw-300 c-grey-900 mB-40">Register</h4>
          <form>
            <div className="form-group">
              <label className="text-normal text-dark">Username</label>
              <input type="text" className="form-control" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="text-normal text-dark">Email Address</label>
              <input type="email" className="form-control" placeholder="name@email.com" />
            </div>
            <div className="form-group">
              <label className="text-normal text-dark">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label className="text-normal text-dark">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="peer">
            <Link to="/forgot">Forgot your password?</Link>
          </div>
          <br />
          <button type="button" className="btn cur-p btn-primary">Register with Facebook    </button><br />
          <button type="button" className="btn cur-p btn-danger">Register with Google      </button><br />
          <Link to="/"><button type="button" className="btn cur-p btn-secondary">Got account? Login!</button></Link>
          <br /><br />
        </div>
      </div>

    );
  }
}

export default Register;
