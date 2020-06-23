import React from "react";
import { CandidatesServise } from "../../../../services/CandidatesServise";
import { Candidate } from "./Candidate/Candidate";
import style from "./SubmitReport.module.scss";
import { Button } from "react-bootstrap";
import { SelectCompany } from "./SelectCompany/SelectCompany";
import { Container, Row, Col } from "react-bootstrap";

class SubmitReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: null,
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
        <Row>
          <Col xs={12}>
            <Row>
              <div
                className={`${style.typeOfAction} col-lg-2 border-right border-dark`}
              >
                <p className={`${style.paragraph}`}>1. Select Candidate</p>
                <p className={`${style.paragraph}`}>2. Select Company </p>
                <p className={`${style.paragraph} `}>3. Fill Report Deatails</p>
                <div>
                  {this.state.candidateId !== 0 ? (
                    <img
                      src={`${this.state.candidateImage}`}
                      className="Candidate__image"
                      alt="avatar"
                    />
                  ) : null}
                </div>
              </div>
              <div className={`${style.candidates} col-10`}>
                <Row>
                  {this.state.characters !== null
                    ? this.state.characters.map((item, i) => (
                        <Col xs={6}>
                          <Candidate
                            key={i}
                            candidate={item}
                            getInfoForSubmit={this.getCandidate}
                          />
                        </Col>
                      ))
                    : null}
                  <Col
                    xs={{ span: 10, offset: 2 }}
                    className="d-flex justify-content-end mt-4"
                  >
                    <Button className={`${style.btn} mr-5`}>Next</Button>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export { SubmitReport };
