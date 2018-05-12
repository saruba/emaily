import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import SurveyField from './SurveyField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    overflowX: 'hidden',
    marginTop: theme.spacing.unit * 3,
  }),
});
type Props = {
  handleSubmit: Function,
  classes: {},
};

const SurveyForm = ({ handleSubmit, classes }: Props) => (
  <form
    className={classes.container}
    onSubmit={handleSubmit}
    autoComplete="off"
  >
    <Paper className={classes.root} elevation={4}>
      <Grid container spacing={16} justify="space-between">
        <Grid item xs={12}>
          <Field
            name="recipients"
            type="text"
            label="Recipients"
            component={SurveyField}
          />
          <Field
            name="subject"
            type="text"
            label="Subject"
            component={SurveyField}
          />
          <Field
            name="title"
            type="text"
            label="Title"
            component={SurveyField}
          />
          <Field
            name="body"
            type="text"
            label="Body"
            multiline
            rows="4"
            component={SurveyField}
          />
        </Grid>
        <Grid item>
          <Button>Cancel</Button>
        </Grid>
        <Grid item>
          <Button type="submit" variant="raised" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </form>
);

const StyledSurveyForm = withStyles(styles)(SurveyForm);

export default reduxForm({
  form: 'surveyForm',
})(StyledSurveyForm);
