import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    return (
      <div>
        tester component
      </div>
    );
  }
}

const getProps = state => ({
  data: state.contentfulReducer
});

export default connect(getProps)(App);
