import React from 'react';
import Amount from './Amount';
import Euro from './Euro';
import Pounds from './Pounds';

function App() {
  return (
    <div>
      <Amount>
        {amount => (
          <div>
            <Euro amount={amount} />
            <Pounds amount={amount} />
          </div>
        )}
      </Amount>
    </div>
  );
}

export default App;
