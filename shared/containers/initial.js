import React from 'react';
import { Provider } from 'react-redux';

export default props => {
  return (
    <Provider store={props.state}>
      <div>
        here
      </div>
    </Provider>
  );
};
