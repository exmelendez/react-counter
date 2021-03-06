import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Items from "./components/Items";
import "./App.css";

class App extends Component {
  state = {
    counters: []
  };

  handleAdd = (id, title, cost) => {
    const counters = [...this.state.counters];

    if (counters.length < 1) {
      counters.push({ id: id, qty: 1, cost: cost });
    } else {
      counters.map(c => {
        if (c.id === id) {
          c.qty = c.qty + c.qty;
        } else {
          counters.push({ id: id, qty: 1, cost: cost });
        }
        return c;
      });
    }

    this.setState({ counters });
  };

  handleDecrease = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    if (counters[index].qty > 0) {
      counters[index].qty--;
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
        <Items onAdd={this.handleAdd} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
