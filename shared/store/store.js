import { createStore, applyMiddleware } from 'redux';
import Reducers from '../reducers/reducers';

const configureStore = preloadedState => {
  return createStore(Reducers, preloadedState);
};

export default configureStore;
