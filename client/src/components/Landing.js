import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import SagasTest from './SagasTest';

export default () => (
  <Fragment>
    <Typography
      align="center"
      color="primary"
      variant="display4"
      gutterBottom
      component="h1"
    >
      emaly!
    </Typography>
    <Typography
      align="center"
      color="textSecondary"
      variant="display1"
      gutterBottom
    >
      Collect feedback from your users
    </Typography>
    <SagasTest />
  </Fragment>
);
