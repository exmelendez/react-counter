import React from "react";

const NavBar = ({ itemQty, totalSum }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand" href="#">
        Cart{" "}
        <span className="badge badge-pill badge-secondary m-2">{itemQty}</span>
        <span className="badge badge-pill badge-secondary">{totalSum}</span>
      </span>
    </nav>
  );
};

export default NavBar;
