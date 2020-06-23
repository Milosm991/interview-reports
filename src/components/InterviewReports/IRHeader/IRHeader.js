import React from "react";
import style from "./IRHeader.module.scss";

const IRHeader = () => {
  return (
    <nav className={`navbar ${style.nav}`}>
      <h1 className="navbar-brand navbar-text">Interviews And Reports</h1>
      <span className={`${style.spn} p-3`}>Candidates</span>
    </nav>
  );
};

export { IRHeader };
