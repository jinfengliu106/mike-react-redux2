import React, { Component } from 'react';

class ConnectionHeaderComponent extends Component {


  render() {
    const {title, button, modal, onAddClick} = this.props;

    return (
          <div className="masonry-item col-md-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">{title}</h6>
              <div className="mT-30">
                {/* Button trigger modal */}
                <button type="button" className={'btn ' + button.class} data-toggle="modal" data-target={'#'+modal.id}>
                  {button.text}
                </button>
                {/* Modal */}
                <div className="modal fade" id={modal.id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{modal.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {modal.content}
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=> onAddClick("aaa")}>Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}
}

export default ConnectionHeaderComponent;
