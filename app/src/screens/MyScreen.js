import React, { Component } from 'react';
import { connect } from 'react-redux';
import { /* import actions */ } from '../actions';

class MyScreen extends Component {
  render() {
    return (
      <div className="">
					<h1>MyScreen</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {  };
}

export default connect(mapStateToProps, { /* */ })(MyScreen);
