import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SelectCompany } from "./SelectCompany/SelectCompany";
import { APHeader } from "../../APHeader/APHeader";
import { SelectCandidate } from "./SelectCandidate/SelectCandidate";
import { CompanyService } from "../../../../services/CompanyServise";
import { CandidatesServise } from "../../../../services/CandidatesServise";
import { FillReportDetails } from "./FillReportDetails/FillReportDetails";

import { SubmitNewReport } from "../../../../services/AuthService";

class SubmitReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 1,
      characters: null,
      companies: null,
      candidateId: null,
      candidateName: "",
      companyId: null,
      companyName: "",
      interviewDate: null,
      phase: "",
      status: "",
      note: "",
      candidateImage: null,
    };
  }
  componentDidMount() {
    new CandidatesServise()
      .fetchAll()
      .then((res) => this.setState({ characters: res.data }));
    new CompanyService()
      .fetchAll()
      .then((result) => this.setState({ companies: result.data }));
  }
  getCandidate = (item, currentTarget) => {
    let a = this.state.characters.filter((character) => item === character);
    this.setState({
      candidateId: a[0].id,
      candidateName: a[0].name,
      candidateImage: a[0].avatar,
    });
    this.selectedCandidate(currentTarget);
  };

  selectedCandidate(Candidate) {
    if (document.querySelector(".bg-secondary") !== null) {
      let $selectedCandidated = document.querySelector(".bg-secondary");
      $selectedCandidated.classList.remove("bg-secondary");
    }
    Candidate.classList.add("bg-secondary");
  }
  getCompany = (item, currentTarget) => {
    let a = this.state.companies.filter((company) => item === company);
    this.setState({
      companyName: a[0].name,
      companyId: a[0].id,
    });
    if (document.querySelector(".bg-secondary") !== null) {
      let $selectedCandidated = document.querySelector(".bg-secondary");
      $selectedCandidated.classList.remove("bg-secondary");
    }
    currentTarget.classList.add("bg-secondary");
  };
  getReportDetails = (event, currentTarget) => {
    console.log(currentTarget.type === "text");
    if (
      currentTarget.value === "cv" ||
      currentTarget.value === "hr" ||
      currentTarget.value === "tech" ||
      currentTarget.value === "final"
    ) {
      this.setState({ phase: currentTarget.value });
    } else if (
      currentTarget.value === "Passed" ||
      currentTarget.value === "Declined"
    ) {
      this.setState({ status: currentTarget.value });
    } else if (currentTarget.type === "date") {
      this.setState({ interviewDate: currentTarget.value });
    } else {
      this.setState({ note: currentTarget.value });
    }
  };
  submitReport = () => {
    SubmitNewReport(this.state);
  };
  nextStep = (event) => {
    let counter = this.state.steps + 1;
    if (counter === 4) {
      counter = 1;
    }
    this.setState({ steps: counter });
  };
  previousStep = () => {
    let counter = this.state.steps - 1;
    this.setState({ steps: counter });
  };
  render() {
    return (
      <Container>
        <APHeader />
        <div className="mt-5">
          {this.state.steps === 1 ? (
            <Row>
              <Col xs={12}>
                {this.state.characters !== null ? (
                  <SelectCandidate
                    characters={this.state.characters}
                    getCandidate={this.getCandidate}
                    next={this.nextStep}
                  />
                ) : null}
              </Col>
            </Row>
          ) : this.state.steps === 2 ? (
            <Row>
              <Col xs={12}>
                {this.state.companies !== null ? (
                  <SelectCompany
                    companies={this.state.companies}
                    candidateName={this.state.candidateName}
                    getCompany={this.getCompany}
                    next={this.nextStep}
                    prev={this.previousStep}
                  />
                ) : null}
              </Col>
            </Row>
          ) : (
            <FillReportDetails
              candidateName={this.state.candidateName}
              companyName={this.state.companyName}
              prev={this.previousStep}
              getDetailsInfo={this.getReportDetails}
              submit={this.submitReport}
            />
          )}
        </div>
      </Container>
    );
  }
}
export { SubmitReport };
