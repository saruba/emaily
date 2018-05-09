// Rendering layer control (React Router)
import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import AppContent from './AppContent';
import Landing from './Landing';

const Dashboard = () => (
  <Typography variant="title" gutterBottom>
    Dashboard
  </Typography>
);
const SurveyNew = () => (
  <Typography variant="title" gutterBottom>
    Survey new
  </Typography>
);

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
      <HashRouter>
        <div>
          <Header />
          <AppContent>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </AppContent>
        </div>
      </HashRouter>
    );
  }
}

export default connect(null, actions)(App);
