import React, { PureComponent } from 'react';
import Typography from 'material-ui/Typography';
import SurveyForm from './SurveyForm';

class SurveyNew extends PureComponent {
  render() {
    return (
      <section>
        <Typography variant="title" gutterBottom>
          New Survey
        </Typography>
        <SurveyForm />
      </section>
    );
  }
}

export default SurveyNew;
