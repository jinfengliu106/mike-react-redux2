import React, { Component } from 'react';

class ConnectionContentComponent extends Component {
  render() {
    const {title, onDeleteClick} = this.props;
    return (
          <div className="masonry-item col-md-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">{title}</h6>
              <div className="mT-30">
                <div className="list-group">
                  <a href="#" className="list-group-item list-group-item-action"> {/* class active style="background:red" */}
                    Cras justo odio
                    <div className="peer">
                      <button type="button" className="btn cur-p btn-outline-danger" style={{float: 'right'}} onClick={()=>onDeleteClick('aaa')}>Delete</button>
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
    );
}
}

export default ConnectionContentComponent;
