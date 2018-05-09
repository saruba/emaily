import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'material-ui/Button';

import * as actions from '../actions';

type Props = {
  handleTokenActionCreator: Function,
};

class Payments extends PureComponent<Props> {
  render() {
    return (
      <StripeCheckout
        name="emaily"
        description="5$ form 5 email credit"
        amount={500}
        token={token => this.props.handleTokenActionCreator(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button variant="raised" color="secondary">
          Add Credits
        </Button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
