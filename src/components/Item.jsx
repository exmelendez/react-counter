import React from "react";
import ItemTitle from "./ItemTitle";
import ItemBtn from "./ItemBtn";

const Item = ({ item, onAdd }) => {
  return (
    <div>
      <ItemTitle title={item.item} price={item.cost} />
      <ItemBtn onAdd={onAdd} item={item} />
    </div>
  );
};

export default Item;
