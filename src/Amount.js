import React from 'react';

function Amount(props) {
  return (
    <div>
      <h3>Us Dollar: {props.amount}</h3>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

export default Amount;
