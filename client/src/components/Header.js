// @flow
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Payments from './Payments';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  brand: {
    textDecoration: 'none',
  },
  button: {
    marginLeft: theme.spacing.unit,
  },
  credits: {
    marginLeft: theme.spacing.unit * 2,
  },
});

type Props = {
  classes: { flex: String, brand: String, button: String, credits: String },
  auth: { credits: Number },
};

class Header extends PureComponent<Props> {
  renderContent() {
    const { auth, classes } = this.props;
    switch (auth) {
      case null:
        return <CircularProgress color="secondary" />;
      case false:
        return (
          <Button href="/auth/google" color="inherit">
            Login
          </Button>
        );
      default:
        return (
          <Fragment>
            <Payments className={classes.button} />
            <Typography
              variant="body2"
              color="inherit"
              className={classes.credits}
            >
              Credits: {auth.credits}
            </Typography>
            <Button
              href="/api/logout"
              color="inherit"
              className={classes.button}
            >
              Logout
            </Button>
          </Fragment>
        );
    }
  }
  render() {
    const { classes, auth } = this.props;

    return (
      <AppBar>
        <Toolbar>
          <div className={classes.flex}>
            <Typography
              component={Link}
              to={auth ? '/surveys' : '/'}
              variant="title"
              color="inherit"
              className={classes.brand}
            >
              emaily
            </Typography>
          </div>
          {this.renderContent()}
        </Toolbar>
      </AppBar>
    );
  }
}

const StyledHeader = withStyles(styles)(Header);

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(StyledHeader);
