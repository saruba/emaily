// @flow

import * as React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
});

type Props = {
  className: string,
  classes: { root: {} },
  children: React.Node,
};

const AppContent = ({ className, classes, children }: Props) => (
  <div className={classNames(classes.root, className)}> {children} </div>
);

export default withStyles(styles)(AppContent);
