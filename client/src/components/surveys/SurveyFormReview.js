import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import formFields from './formFields';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

type Props = {
  formValues: {},
  onCancel: Function,
  classes: Object,
};

const SurveyFormReview = ({ formValues, onCancel, classes }: Props) => {
  const reviewFields = formFields.map(({ name, label }) => (
    <Grid item xs={12} key={name}>
      <Typography variant="subheading" component="label">
        {label}
      </Typography>
      <Typography variant="body2" component="p" gutterBottom>
        {formValues[name]}
      </Typography>
    </Grid>
  ));
  return (
    <section>
      <Typography variant="display1" component="h2" gutterBottom>
        Please confirm your entries
      </Typography>
      <Paper className={classes.root} elevation={4}>
        <Grid container spacing={16} justify="space-between">
          {reviewFields}
          <Grid item>
            <Button onClick={onCancel}>Back</Button>
          </Grid>
          <Grid item>
            <Button variant="raised" color="primary">
              Send Survey
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
};

const mapStateToPros = state => ({
  formValues: state.form.surveyForm.values,
});

const StyledSurveyFormReview = withStyles(styles)(SurveyFormReview);

export default connect(mapStateToPros)(StyledSurveyFormReview);
