import React from 'react';
import { connect } from 'react-redux';

import Counter from './Counter';

type Props = {
  value: number,
  dispatch: Function,
};

const SagasTest = ({ value, dispatch }: Props) => (
  <Counter
    value={value}
    onIncrement={() => dispatch({ type: 'INCREMENT' })}
    onDecrement={() => dispatch({ type: 'DECREMENT' })}
    onIncrementAsync={() => dispatch({ type: 'INCREMENT_ASYNC' })}
  />
);

const mapStateToPorps = state => ({
  value: state.counter,
});

export default connect(mapStateToPorps)(SagasTest);
