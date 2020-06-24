import React from "react";

import { Row, Col, Button } from "react-bootstrap";
import { Candidate } from "../Candidate/Candidate";

import style from "./SelectCandidates.module.scss";

const SelectCandidate = ({ characters, getCandidate, next }) => {
  return (
    <Row>
      <div
        className={`${style.typeOfAction} col-lg-2 border-right border-dark`}
      >
        <p className={`${style.paragraph} font-weight-bolder `}>
          <span className={style.span}>1.</span> Select Candidate
        </p>
        <p className={`${style.paragraph}`}>2. Select Company </p>
        <p className={`${style.paragraph} `}>3. Fill Report Details</p>
      </div>
      <div className={`${style.candidates} col-10`}>
        <Row>
          {characters !== null
            ? characters.map((item, i) => (
                <Col xs={6}>
                  <Candidate
                    key={i}
                    candidate={item}
                    getInfoForSubmit={getCandidate}
                  />
                </Col>
              ))
            : null}
          <Col
            xs={{ span: 10, offset: 2 }}
            className="d-flex justify-content-end mt-4"
          >
            <Button className={`${style.btn} mr-5`} onClick={next}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </Row>
  );
};
export { SelectCandidate };
