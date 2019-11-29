import React from 'react';

class Amount extends React.Component {
  state = {
    amount: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        [name]: Number(value),
      };
    });
  };

  handleReset = () => {
    this.setState({ amount: '' });
  };

  increment = () => {
    this.setState(prevState => ({ amount: Number(prevState.amount) + 1 }));
  };

  decrement = () => {
    this.setState(prevState => ({ amount: prevState.amount - 1 }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="amount"
          value={this.state.amount}
          onChange={this.handleChange}
          placeholder="Enter amount"
        />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}

export default Amount;
