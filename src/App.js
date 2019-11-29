import React from 'react';
import Amount from './Amount';
import Euro from './Euro';
import Pounds from './Pounds';

class App extends React.Component {
  state = {
    amount: 0,
  };

  increment = () => {
    this.setState(prevState => ({ amount: prevState.amount + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ amount: prevState.amount - 1 }));
  };

  render() {
    return (
      <div>
        <Amount amount={this.state.amount} increment={this.increment} decrement={this.decrement} />
        <Euro amount={this.state.amount} />
        <Pounds amount={this.state.amount} />
      </div>
    );
  }
}

export default App;
