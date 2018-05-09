// @flow
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';

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
        return <CircularProgress />;
      case false:
        return (
          <a href="/auth/google" color="inherit">
            Login
          </a>
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
            <a href="logout">logout</a>
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
