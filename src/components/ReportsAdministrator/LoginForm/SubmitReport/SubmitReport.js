import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { SelectCompany } from "./SelectCompany/SelectCompany";
import { APHeader } from "../../APHeader/APHeader";
import { SelectCandidate } from "./SelectCandidate/SelectCandidate";
import { CompanyService } from "../../../../services/CompanyServise";
import { CandidatesServise } from "../../../../services/CandidatesServise";

class SubmitReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
      companies: null,
      candidateId: null,
      candidateName: "",
      companyId: null,
      companyName: "",
      interviewDate: "",
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

  render() {
    return (
      <Container>
        <APHeader />
        <div className="mt-5">
          <Row>
            <Col xs={12}>
              {this.state.characters !== null ? (
                <SelectCandidate
                  characters={this.state.characters}
                  getCandidate={this.getCandidate}
                  candidateImage={this.state.candidateImage}
                />
              ) : null}
            </Col>
          </Row>
          {/*SELECT COMPANY */}
          {/* <Row>
            <Col xs={12}>
              {this.state.companies !== null ? (
                <SelectCompany
                  companies={this.state.companies}
                  candidateImage={this.state.candidateImage}
                />
              ) : null}
            </Col>
          </Row> */}
        </div>
      </Container>
    );
  }
}
export { SubmitReport };
