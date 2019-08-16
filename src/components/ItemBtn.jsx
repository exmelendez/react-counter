import React from "react";

const ItemBtn = ({ item, onAdd }) => {
  return (
    <button
      onClick={() => onAdd(item.id, item.item, item.cost)}
      className="btn btn-warning m-2"
    >
      Add
    </button>
  );
};

export default ItemBtn;
