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
          placeholder="Enter US Dollars amount"
        />
        <div className="button-container">
          <button className="btn btn-2" onClick={this.increment}>
            Increment
          </button>
          <button className="btn btn-2" onClick={this.decrement}>
            Decrement
          </button>
          <button className="btn btn-2" onClick={this.handleReset}>
            Reset
          </button>
        </div>
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}

export default Amount;
