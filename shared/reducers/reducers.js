import { combineReducers } from 'redux';
import * as ActionTypes from '../actions/actions';

const contentfulReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.EXAMPLE_ACTION:
      return state;
    case ActionTypes.CONTENTFUL_INIT:
      return state;
    default:
      return state;
  }
  return state;
};

export default combineReducers({
  contentfulReducer
});
