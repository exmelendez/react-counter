import React from "react";

const NavBar = ({ totalSum }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalSum}</span>
      </a>
    </nav>
  );
};

export default NavBar;
