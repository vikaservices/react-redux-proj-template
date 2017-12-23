import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as actions from '../actions';

class MyPanel extends Component {

  onButtonPressed = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="">
				MyPanel
      </div>
    );
  };
}

export default withRouter(
  connect(null, actions)(MyPanel)
);
