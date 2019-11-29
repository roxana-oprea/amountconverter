import React from 'react';

function Pounds(props) {
  return (
    <div>
      <h4>Pounds: {props.amount * 0.76}</h4>
    </div>
  );
}

export default Pounds;
