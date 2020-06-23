import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import { Company } from "./Company/Company";

import style from "./SelectCompany.module.scss";

const SelectCompany = ({ companies, next, getCompany, candidateName }) => {
  return (
    <Row>
      <div
        className={`${style.typeOfAction} col-lg-2 border-right border-dark`}
      >
        <p className={`${style.paragraph}`}>1. Select Candidate</p>
        <p className={`${style.paragraph} font-weight-bold`}>
          <span className={style.span}>2.</span> Select Company{" "}
        </p>
        <p className={`${style.paragraph} `}>3. Fill Report Deatails</p>
        <div>
          <div className="mt-4">
            <p className={style.candidate}>Candidate:</p>
            <span className={style.candidate_name}>{candidateName}</span>
          </div>
        </div>
      </div>

      <Col xs={10}>
        <div className={style.companies}>
          {companies.map((company) => (
            <Company company={company} getInfoForCompany={getCompany} />
          ))}
        </div>
      </Col>
      <Col xd={12} className="d-flex flex-row-reverse">
        <Button onClick={next}>Next</Button>
      </Col>
    </Row>
  );
};

export { SelectCompany };
