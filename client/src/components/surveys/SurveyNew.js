import React, { PureComponent } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends PureComponent {
  state = {
    showReview: false,
  };
  showReview = () => {
    this.setState({ showReview: true });
  };
  hideReview = () => {
    this.setState({ showReview: false });
  };
  handleSubmit = values => console.log(values);
  renderContent() {
    return this.state.showReview ? (
      <SurveyFormReview onCancel={this.hideReview} />
    ) : (
      <SurveyForm onSurveySubmit={this.showReview} />
    );
  }
  render() {
    return <section>{this.renderContent()}</section>;
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
