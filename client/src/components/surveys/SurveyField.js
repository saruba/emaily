import React from 'react';
import TextField from 'material-ui/TextField';

type renderProps = {
  input: Object,
  meta: {
    touched: boolean,
    error: String,
  },
};

const SurveyField = ({
  input,
  meta: { touched, error },
  ...custom
}: renderProps) => (
  <TextField
    fullWidth
    error={touched && error}
    helperText={touched && error}
    margin="normal"
    {...input}
    {...custom}
  />
);

export default SurveyField;
