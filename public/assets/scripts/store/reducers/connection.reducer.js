import * as Actions from '../actions';

const initialState = {
    emailConnections: [],
    facebookConnections: []
};

const connection = function (state = initialState, action) {
  switch ( action.type )
  {
    case Actions.CREATE_EMAIL_CONNECTION:
    {
      console.log('add email connection', action.payload);
      state.emailConnections.push(action.payload);
      return state;
    }
    case Actions.CREATE_FACEBOOK_CONNECTION:
    {
      console.log('add facebook connection', action.payload);
      state.facebookConnections.push(action.payload);
      return state;
    }
    case Actions.DELETE_EMAIL_CONNECTION:
    {
      console.log('delete email connection', action.payload);
      return state;
    }
    case Actions.DELETE_FACEBOOK_CONNECTION:
    {
      console.log('delete facebook connection', action.payload);
      return state;
    }
    default:
    {
      return state
    }
  }
};

export default connection;
