import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import { Company } from "./Company/Company";
import { SearchBar } from "../../../../SearchBar/SearchBar";
import { NothingFound } from "../../../../NothingFound/NothingFound";

import { search } from "../../../../../entities/search";

import style from "./SelectCompany.module.scss";

const SelectCompany = ({
  companies,
  filteredCompanies,
  next,
  getCompany,
  candidateName,
  prev,
  searchedCompanies,
}) => {
  const getValue = (value) => {
    let filteredCompanies = search(companies, value);
    searchedCompanies(filteredCompanies);
  };
  return (
    <Row>
      <div
        className={`${style.typeOfAction} col-xl-2 col-lg-2 col-md-2 col-12`}
      >
        <p className={`${style.paragraph}`} id="1">
          1. Select Candidate
        </p>
        <p className={`${style.paragraph} font-weight-bold`}>
          <span className={style.span} id="2">
            2.
          </span>{" "}
          Select Company{" "}
        </p>
        <p className={`${style.paragraph} `} id="3">
          3. Fill Report Details
        </p>
        <div>
          <div className="mt-4">
            <p className={style.candidate}>Candidate:</p>
            <span className={style.candidate_name}>{candidateName}</span>
          </div>
        </div>
      </div>
      <Col xs={10}>
        <Row>
          <Col xs={12} className="d-flex flex-row-reverse">
            <SearchBar getInputValue={getValue} />
          </Col>

          {filteredCompanies.length ? (
            filteredCompanies.map((company) => (
              <Col xs={12} key={company.id}>
                <Company company={company} getInfoForCompany={getCompany} />
              </Col>
            ))
          ) : (
            <NothingFound />
          )}
          <Col xd={7} className={style.buttons}>
            <Button onClick={prev} className={style.btnColor}>
              Prev
            </Button>
            <Button onClick={next} className={style.btnColor}>
              Next
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export { SelectCompany };
