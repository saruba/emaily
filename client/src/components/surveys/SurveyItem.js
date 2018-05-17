import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 2,
  },
});

type Props = {
  title: string,
  dateSent: string,
  yes: number,
  no: number,
  classes: {
    root: string,
  },
};

const SurveyItem = ({ title, yes, no, dateSent, classes }: Props) => (
  <Card className={classes.root}>
    <CardContent>
      <Grid container justify="space-between" spacing={16}>
        <Grid item xs>
          <Typography variant="title" color="textSecondary">
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography color="textSecondary">
            Sent On: {new Date(dateSent).toLocaleDateString()}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item>
          <Typography variant="body2">Yes: {yes}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">No: {no}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default withStyles(styles)(SurveyItem);
