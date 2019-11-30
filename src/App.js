import React from 'react';
import Amount from './Amount';
import Euro from './Euro';
import Pounds from './Pounds';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Amount>
        {amount => (
          <div className="results">
            <Euro amount={amount} />
            <Pounds amount={amount} />
          </div>
        )}
      </Amount>
    </div>
  );
}

export default App;
