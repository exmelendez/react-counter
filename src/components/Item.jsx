import React from "react";
import ItemTitle from "./ItemTitle";
import ItemBtn from "./ItemBtn";

const Item = ({ item }) => {
  return (
    <div>
      <ItemTitle title={item.item} price={item.cost} />
      <ItemBtn itemId={item.id} />
    </div>
  );
};

export default Item;
