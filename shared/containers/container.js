import React from 'react';
import HeaderContainer from './header';

export default props => {
  return (
    <div
      className="page__wrap"
    >
      <HeaderContainer/>
      {
        props.children
      }
    </div>
  )
}
