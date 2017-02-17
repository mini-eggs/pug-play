import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/item'

const getProps = state => {
  return {
    items: [
      ...state.contentfulReducer.posts,
      ...state.contentfulReducer.pages
    ]
  }
}

export default connect(getProps)(Item);
