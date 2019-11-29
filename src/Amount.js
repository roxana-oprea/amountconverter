import React from 'react';

class Amount extends React.Component {
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
        <h3>Us Dollar: {this.state.amount}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}

export default Amount;
