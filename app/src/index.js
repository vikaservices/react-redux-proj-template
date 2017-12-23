// main file for react app
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/';

import MyOtherScreen from './screens/MyOtherScreen';
import MyScreen from './screens/MyScreen';

ReactDOM.render(
	<Provider store={store}>
		<Router>
      <div className="app">
        <Switch>
          <Route path="/mypath" component={MyOtherScreen} />
          <Route path="/" component={MyScreen} />
        </Switch>
      </div>
    </Router>
	</Provider>
, document.querySelector('.app')); /* global document */
