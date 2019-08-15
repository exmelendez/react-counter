import React from "react";

const ItemTitle = ({ title, price }) => {
  return (
    <main>
      <p>{title}</p>
      <p>{price}</p>
    </main>
  );
};

export default ItemTitle;
