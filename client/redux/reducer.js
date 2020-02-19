import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';
import message from './message/reducer';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  message,
});

export default createRootReducer;
