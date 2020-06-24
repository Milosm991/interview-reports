import React from "react";

import style from "./Company.module.scss";

const Company = ({ company, getInfoForCompany }) => (
  <div
    className={style.comp}
    onClick={(event) => getInfoForCompany(company, event.currentTarget)}
  >
    {company.name}
  </div>
);
export { Company };
