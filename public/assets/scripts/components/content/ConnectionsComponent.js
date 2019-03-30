import React, { Component } from 'react';

class ConnectionsComponent extends Component {
  render() {
    return (
             <main className="main-content bgc-grey-100">
               <div id="mainContent">

          <div className="masonry-item col-md-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Email</h6>
              <div className="mT-30">
                <button type="button" className="btn btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Connect new email account</button>
              </div>
            </div>
          </div>

          <div className="masonry-item col-md-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Manage email connections</h6>
              <div className="mT-30">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action"> {/* class active style="background:red" */}
                    Cras justo odio
                    <div className="peer">
                      <button type="button" className="btn cur-p btn-outline-danger" style={{float: 'right'}}>Delete</button>
                    </div>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                  <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                  <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                  <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                </div>
              </div>
            </div>
          </div>

          <div className="masonry-item col-md-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Facebook</h6>
              <div className="mT-30">
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  Connect new facebook account
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="masonry-item col-md-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Manage facebook connections</h6>
              <div className="mT-30">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action"> {/* class active style="background:red" */}
                    Cras justo odio
                    <div className="peer">
                      <button type="button" className="btn cur-p btn-outline-danger" style={{float: 'right'}}>Delete</button>
                    </div>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                  <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                  <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                  <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                </div>
              </div>
            </div>
          </div>

                </div>
                </main>
    );
}
}

export default ConnectionsComponent;
