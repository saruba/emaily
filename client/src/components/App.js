// Rendering layer control (React Router)
import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import AppContent from './AppContent';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

type Props = {
  // fetchUser: Function,
  fetchUserActionCreator: Function,
};

class App extends PureComponent<Props> {
  componentDidMount() {
    // this.props.fetchUser();
    this.props.fetchUserActionCreator();
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <AppContent>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </AppContent>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
