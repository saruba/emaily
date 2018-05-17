import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import formFields from './formFields';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hidden',
  }),
});
type Props = {
  handleSubmit: Function,
  onSurveySubmit: Function,
  classes: {},
};

const renderFields = () =>
  formFields.map(field => (
    <Field key={field.name} type="text" {...field} component={SurveyField} />
  ));

const SurveyForm = ({ handleSubmit, onSurveySubmit, classes }: Props) => (
  <form
    onSubmit={handleSubmit(onSurveySubmit)}
    className={classes.container}
    autoComplete="off"
  >
    <Paper className={classes.root} elevation={4}>
      <Grid container spacing={16} justify="space-between">
        <Grid item xs={12}>
          {renderFields()}
        </Grid>
        <Grid item>
          <Button component={Link} to="/surveys">
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button type="submit" variant="raised" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </Paper>
  </form>
);

const StyledSurveyForm = withStyles(styles)(SurveyForm);

function validate({ recipients, ...values }) {
  const errors = {};
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must porvide a ${name}`;
    }
  });
  errors.recipients = validateEmails(recipients);
  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  destroyOnUnmount: false,
  validate,
})(StyledSurveyForm);
