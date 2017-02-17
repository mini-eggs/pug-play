import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/header'

const getProps = state => {
  return {
    links: state.contentfulReducer.links
  }
}

export default connect(getProps)(HeaderComponent);
