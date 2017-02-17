import React from 'react';
import { connect } from 'react-redux';
import Blogs from '../components/blogs'

const getProps = state => {
  return {
    items: state.contentfulReducer.posts
  }
}

export default connect(getProps)(Blogs);
