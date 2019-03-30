import React, { Component } from 'react';
import {connect} from 'react-redux';
import ConnectionHeaderComponent from './ConnectionHeaderComponent';
import ConnectionContentComponent from './ConnectionContentComponent';
import * as actions from '../../store/actions/connection.action'
import {bindActionCreators} from 'redux';

class ConnectionsComponent extends Component {
  render() {
    const {emailConnections, facebookConnections, createEmailConnection, createFacebookConnection, deleteEmailConnection, deleteFacebookConnection} = this.props;

    return (
            <main className="main-content bgc-grey-100">
              <div id="mainContent">

                <ConnectionHeaderComponent
                  title='Email'
                  button={
                    {
                      text: 'Connect new email account',
                      class: 'btn-danger'
                    }
                  }
                  modal={
                    {
                      id:       'emailNewModal',
                      title:    'Title',
                      content:  "And here's some amazing content. It's very engaging. Right?"
                    }
                  }
                  onAddClick={(data) => createEmailConnection(data)}
                  ></ConnectionHeaderComponent>

                <ConnectionContentComponent
                  title='Manage email connections'
                  items={emailConnections}
                  onDeleteClick={(data) => deleteEmailConnection(data)}>
                </ConnectionContentComponent>

                <ConnectionHeaderComponent
                  title='Facebook'
                  button={
                    {
                      text: 'Connect new facebook account',
                      class: 'btn-primary'
                    }
                  }
                  modal={
                    {
                      id:       'facebookNewModal',
                      title:    'Title',
                      content:  "And here's some amazing content. It's very engaging. Right?"
                    }
                  }
                  onAddClick={(data) => createFacebookConnection(data)}
                  ></ConnectionHeaderComponent>

                <ConnectionContentComponent
                  title='Manage facebook connections'
                  items={facebookConnections}
                  onDeleteClick={(data) => deleteFacebookConnection(data)}>
                </ConnectionContentComponent>
              </div>
            </main>
    );
}
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps({connection})
{
  console.log(connection);
    return {
      emailConnections   : connection.emailConnections,
      facebookConnections: connection.facebookConnections
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ConnectionsComponent);
