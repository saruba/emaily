// @flow
import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

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
  <Typography variant="title" gutterBottom>
    Dashboard
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
  </Typography>
);

export default withStyles(styles)(Dashboard);
