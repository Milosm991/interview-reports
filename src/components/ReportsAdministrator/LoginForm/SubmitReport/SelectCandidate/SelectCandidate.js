import React from "react";

import { Row, Col, Button, Container } from "react-bootstrap";
import { Candidate } from "../Candidate/Candidate";
import { SearchBar } from "../../../../SearchBar/SearchBar";
import { search } from "../../../../../entities/search";

import style from "./SelectCandidates.module.scss";
import { NothingFound } from "../../../../NothingFound/NothingFound";

const SelectCandidate = ({
  candidates,
  filteredCandidates,
  getCandidate,
  next,
  searchCandidates,
  choseSubmitPart,
}) => {
  const getValue = (value) => {
    let filteredCandidates = search(candidates, value);
    searchCandidates(filteredCandidates);
  };

  return (
    <Row>
      <div
        className={`${style.typeOfAction} col-xl-2 col-lg-2 col-md-12 col-12 `}
      >
        <p className={`${style.paragraph} font-weight-bolder `}>
          <span className={style.span}>1.</span> Select Candidate
        </p>
        <p className={`${style.paragraph}`} id="2">
          2. Select Company{" "}
        </p>
        <p className={`${style.paragraph}`} id="3">
          3. Fill Report Details
        </p>
      </div>
      <div
        className={`${style.candidates} col-xl-10 col-lg-10 col-md-12 col-12`}
      >
        <Row className={style.candidateWrapper}>
          <Col
            xl={12}
            lg={12}
            md={12}
            xs={8}
            className="d-flex flex-row-reverse"
          >
            <SearchBar getInputValue={getValue} />
          </Col>
          {filteredCandidates.length ? (
            filteredCandidates.map((item, i) => (
              <Col className={style.center_content} xl={6} lg={6} md={6} xs={12} key={item.id}>
                <Candidate
                  key={i}
                  candidate={item}
                  getInfoForSubmit={getCandidate}
                />
              </Col>
            ))
          ) : (
            <NothingFound />
          )}
          <Col
            xl={10}
            lg={10}
            md={12}
            xs={4}
            className="d-flex justify-content-end mt-4"
          >
            <Button className={`${style.btn}`} onClick={next}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </Row>
  );
};
export { SelectCandidate };
