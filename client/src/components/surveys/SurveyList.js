import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SurveyItem from './SurveyItem';
import { fetchSurveys } from '../../actions';

type Props = {
  surveys: Array,
  fetchSurveys: Function,
};

class SurveyList extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    return this.props.surveys
      .reverse()
      .map(({ _id, ...survey }) => <SurveyItem key={_id} {...survey} />);
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
