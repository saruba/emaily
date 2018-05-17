// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

import SurveyList from './surveys/SurveyList';

type Props = {
  classes: {
    fab: string,
  },
};

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

const Dashboard = ({ classes }: Props) => (
  <section>
    <Typography variant="title" gutterBottom>
      Dashboard
    </Typography>
    <SurveyList />
    <Button
      component={Link}
      to="/surveys/new"
      variant="fab"
      className={classes.fab}
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Button>
  </section>
);

export default withStyles(styles)(Dashboard);
