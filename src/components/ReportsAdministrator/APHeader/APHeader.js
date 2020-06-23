import React from "react";
import style from "./APHeader.module.scss";
import { Link } from "react-router-dom";

const APHeader = () => {
  return (
    <nav className={`navbar ${style.nav}`}>
      <h1 className="navbar-brand navbar-text">Reports Administration</h1>
      <div>
        <Link to="/admin/list_of_reports" className={style.link}>
          <span className={`${style.spn}`}>Reports</span>
        </Link>
        <Link to="/admin/create_report" className={style.link}>
          <span className={`${style.spn}`}>Create Report</span>
        </Link>
      </div>
    </nav>
  );
};

export { APHeader };
