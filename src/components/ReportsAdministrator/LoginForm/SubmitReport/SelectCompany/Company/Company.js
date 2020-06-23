import React from "react";

import { Row, Col } from "react-bootstrap";

import style from "./Company.module.scss";

const Company = ({ company, getInfoForCompany }) => (
  <Col xs={12}>
    <div
      className={style.comp}
      onClick={(event) => getInfoForCompany(company, event.currentTarget)}
    >
      {company.name}
    </div>
  </Col>
);
export { Company };
