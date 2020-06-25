import React from "react";
import style from "./IRHeader.module.scss";
import { Link } from "react-router-dom";

const IRHeader = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} navbar`}>
        <h1 className="navbar-brand navbar-text ">Interviews And Reports</h1>
        <Link to="/">
          <span className={`${style.spn} p-3 `}>Candidates</span>
        </Link>
      </nav>
    </header>
  );
};

export { IRHeader };
