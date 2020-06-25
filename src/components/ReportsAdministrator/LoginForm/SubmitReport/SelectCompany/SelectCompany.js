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
      <div className={`${style.typeOfAction} col-2 border-right border-dark`}>
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
              <Col xs={10} key={company.id}>
                <Company company={company} getInfoForCompany={getCompany} />
              </Col>
            ))
          ) : (
            <NothingFound />
          )}
        </Row>
      </Col>
      <Col xd={8} className="d-flex justify-content-around mt-5">
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </Col>
    </Row>
  );
};

export { SelectCompany };
