import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/actions';

const contentfulReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.EXAMPLE_ACTION:
      console.log(action);
      return state;
    case ActionTypes.CONTENTFUL_INIT:
      console.log(action);
      return state;
    default:
      return state;
  }
  return state;
};

export default combineReducers({
  contentfulReducer
});
