import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  state = {
    items: [
      { id: 10, item: "scarf", cost: 9.99 },
      { id: 20, item: "hat", cost: 15.5 }
    ]
  };

  render() {
    const { onAdd } = this.props;

    return (
      <div style={divStyle}>
        {this.state.items.map(c => (
          <Item onAdd={onAdd} key={c.id} item={c} />
        ))}
      </div>
    );
  }
}

const divStyle = {
  background: "#ffc966",
  display: "flex",
  justifyContent: "center",
  width: "90%",
  margin: "auto"
};

export default Items;
