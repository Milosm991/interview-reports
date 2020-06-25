import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SelectCompany } from "./SelectCompany/SelectCompany";
import { APHeader } from "../../APHeader/APHeader";
import { SelectCandidate } from "./SelectCandidate/SelectCandidate";
import { CompanyService } from "../../../../services/CompanyService";
import { CandidatesServise } from "../../../../services/CandidatesService";
import { FillReportDetails } from "./FillReportDetails/FillReportDetails";
import { isLoggedIn } from "../../../../services/AuthService";

import { SubmitNewReport } from "../../../../services/AuthService";

class SubmitReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 1,
      candidates: [],
      filteredCandidates: [],
      companies: null,
      filteredCompanies: [],
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
      .then((res) =>
        this.setState({ candidates: res.data, filteredCandidates: res.data })
      );
    new CompanyService().fetchAll().then((result) =>
      this.setState({
        companies: result.data,
        filteredCompanies: result.data,
      })
    );
  }
  getCandidate = (item, currentTarget) => {
    let a = this.state.candidates.filter((character) => item === character);
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
    let phases = ["cv", "hr", "tech", "final"];
    if (phases.some((itm) => itm === currentTarget.value)) {
      this.setState({ phase: currentTarget.value });
    } else if (
      currentTarget.value === "Passed" ||
      currentTarget.value === "Declined"
    ) {
      this.setState({ status: currentTarget.value });
    } else if (currentTarget.type === "date") {
      this.setState({ interviewDate: new Date(currentTarget.value) });
    } else {
      this.setState({ note: currentTarget.value });
    }
  };
  submitReport = () => {
    SubmitNewReport(this.state);
  };
  nextStep = (event) => {
    if (this.state.candidateName !== "" && this.state.steps === 1) {
      let counter = this.state.steps + 1;
      if (counter === 4) {
        counter = 1;
      }
      this.setState({ steps: counter });
    } else if (this.state.steps === 1) {
      alert("U have to Select Candidate");
    }
    if (this.state.steps === 2 && this.state.companyName !== "") {
      let counter = this.state.steps + 1;
      if (counter === 4) {
        counter = 1;
      }
      this.setState({ steps: counter });
    } else if (this.state.steps === 2) {
      alert("U have to Select Company");
    }
  };
  previousStep = () => {
    let counter = this.state.steps - 1;
    this.setState({ steps: counter });
  };

  searchedCandidates = (filteredArray) => {
    this.setState({ filteredCandidates: filteredArray });
  };

  searchedCompanies = (filteredCompanies) => {
    this.setState({ filteredCompanies });
  };
  render() {
    const areYouAdmin = isLoggedIn();
    if (!areYouAdmin) {
      this.props.history.push("/admin");
    }
    return (
      <Container>
        <APHeader />

        <div className="mt-5">
          {this.state.steps === 1 ? (
            <Row>
              <Col xs={12}>
                {this.state.candidates !== null ? (
                  <SelectCandidate
                    filteredCandidates={this.state.filteredCandidates}
                    candidates={this.state.candidates}
                    getCandidate={this.getCandidate}
                    next={this.nextStep}
                    searchCandidates={this.searchedCandidates}
                  />
                ) : null}
              </Col>
            </Row>
          ) : this.state.steps === 2 ? (
            <Row>
              <Col xs={12}>
                {this.state.companies !== null ? (
                  <SelectCompany
                    filteredCompanies={this.state.filteredCompanies}
                    companies={this.state.companies}
                    candidateName={this.state.candidateName}
                    getCompany={this.getCompany}
                    next={this.nextStep}
                    prev={this.previousStep}
                    searchedCompanies={this.searchedCompanies}
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
