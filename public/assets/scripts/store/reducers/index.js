import {combineReducers} from 'redux';
import connection from './connection.reducer';

const createReducer = (asyncReducers) =>
    combineReducers({
      connection,
      ...asyncReducers
    });

export default createReducer;
