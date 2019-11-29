import React from 'react';

function Euro(props) {
  return (
    <div>
      <h4>Euro: {props.amount * 0.86}</h4>
    </div>
  );
}

export default Euro;
