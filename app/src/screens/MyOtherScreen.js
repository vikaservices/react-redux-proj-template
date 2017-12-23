import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class MyOtherScreen extends Component {

  render() {
    return (
      <div className="">
				<h1>MyOtherScreen</h1>
      </div>
    );
  }
}

export default connect(null, actions)(MyOtherScreen);
