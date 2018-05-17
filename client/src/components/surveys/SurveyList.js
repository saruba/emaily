import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    return this.props.surveys.map(survey => (
      <Card key={survey._id}>
        <CardContent>
          <Typography color="textSecondary">{survey.title}</Typography>
        </CardContent>
      </Card>
    ));
  }
  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
