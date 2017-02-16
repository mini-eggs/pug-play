export const EXAMPLE_ACTION = 'TEST';

export const someAction = props => dispatch => {
  dispatch({
    type: EXAMPLE_ACTION,
    payload: props
  });
};

export const CONTENTFUL_INIT = 'CONTENTFUL_INIT';

export const CONTENTFUL_DATA = props => dispatch => {
  dispatch({
    type: EXAMPLE_ACTION,
    payload: props
  });
};
