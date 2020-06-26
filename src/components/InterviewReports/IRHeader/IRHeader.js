import React from "react";
import style from "./IRHeader.module.scss";
import { Link } from "react-router-dom";

const IRHeader = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} navbar`}>
        <h1 className="navbar-brand navbar-text ">Interviews And Reports</h1>
        <div>
          <Link to="/">
            <span className={`${style.spn} p-3 `}>Candidates</span>
          </Link>
          <Link to="/admin">
            <span className={`${style.span} p-3`}>Log In</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { IRHeader };
