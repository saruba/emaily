import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  paper: theme.mixins.gutters({
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  value: {
    textAlign: 'center',
  },
});

type Props = {
  value: number,
  onIncrement: Function,
  onDecrement: Function,
  onIncrementAsync: Function,
  classes: Object,
};

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  classes,
}: Props) => (
  <Paper className={classes.paper} elevation={4}>
    <Typography align="center" variant="title" gutterBottom>
      Clicks: {value}
    </Typography>
    <Button
      variant="raised"
      onClick={onIncrementAsync}
      className={classes.button}
    >
      Increment afer 1 second
    </Button>
    <Button variant="raised" onClick={onIncrement} className={classes.button}>
      Increment
    </Button>
    <Button variant="raised" onClick={onDecrement} className={classes.button}>
      Decrement
    </Button>
  </Paper>
);

export default withStyles(styles)(Counter);
