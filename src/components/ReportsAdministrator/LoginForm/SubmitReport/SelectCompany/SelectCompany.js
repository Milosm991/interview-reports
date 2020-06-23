import React from "react";
import { Row } from "react-bootstrap";

import style from "./SelectCompany.module.scss";

const SelectCompany = ({ companies, candidateImage }) => {
  return (
    <div>
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
            {candidateImage !== null ? (
              <img
                src={`${candidateImage}`}
                className={style.Candidate__image}
                alt="avatar"
              />
            ) : null}
          </div>
        </div>
      </Row>
    </div>
  );
};

export { SelectCompany };
