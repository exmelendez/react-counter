import React from "react";

const Counter = props => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.qty === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { qty: count } = props.counter;
    return count === 0 ? "Zero" : count;
  };

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm m-2"
      >
        +
      </button>
      <button
        onClick={() => props.onDecrease(props.counter)}
        className="btn btn-secondary btn-sm"
      >
        -
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
