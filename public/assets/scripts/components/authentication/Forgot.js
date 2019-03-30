import React, { Component } from 'react';

class Forgot extends Component {
  render() {
    return (
      <div className="peers ai-s fxw-nw h-100vh">
        <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{backgroundImage: 'url("assets/static/images/bg.jpg")'}} />
        <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{minWidth: '320px'}}>
          <h4 className="fw-300 c-grey-900 mB-40">Forgot password?</h4>
          <form>
            <div className="form-group">
              <label className="text-normal text-dark">Email address</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <div className="peers ai-c jc-sb fxw-nw">
                <div className="peer">
                  <button className="btn btn-primary">Reset password</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Forgot;
