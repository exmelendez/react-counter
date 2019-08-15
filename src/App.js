import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, qty: 1, cost: 5.25 },
      { id: 2, qty: 1, cost: 5.25 },
      { id: 3, qty: 1, cost: 5.25 },
      { id: 4, qty: 1, cost: 5.25 }
    ]
  };

  handleAdd = () => {
    const counters = [...this.state.counters];

    counters.push({ id: 7, qty: 1, cost: 1.0 });
    this.setState({ counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    if (counters[index].qty > 0) {
      counters[index].qty--;
      // counters[index].cost = counters[index].cost - counters[index].cost;
      this.setState({ counters });
    }
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].qty++;
    // counters[index].cost = counters[index].cost + counters[index].cost;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.qty = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          itemQty={this.state.counters
            .filter(c => c.qty > 0)
            .reduce((acc, c) => {
              return acc + c.qty;
            }, 0)}
          totalSum={this.state.counters
            .filter(c => c.qty > 0)
            .map(c => {
              let obj = {};
              obj["cost"] = c.qty * c.cost;
              return obj;
            })
            .reduce((acc, c) => {
              return acc + c.cost;
            }, 0)}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
