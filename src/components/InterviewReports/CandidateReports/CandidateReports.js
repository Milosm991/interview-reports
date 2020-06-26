import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import style from "./CandidateReports.module.scss";

import { IRHeader } from "../IRHeader/IRHeader";
import { ReportsTable } from "./ReportsTable/ReportsTable";
import { CandidateService } from "../../../services/CandidateService";

class CandidateReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidate: [],
    };
  }

  componentDidMount() {
    CandidateService.fetch(this.props.match.params.id).then((candidate) =>
      this.setState({
        candidate,
      })
    );
  }

  render() {
    return (
      <>
        <IRHeader />
        <Container>
          <Row>
            <Col xl={4} lg={4} md={6} xs={12} className="my-5">
              <img
                className={style.avatar}
                src={this.state.candidate.avatar}
                alt="Candidate painting"
              />
            </Col>
            <Col
              xl={4}
              lg={4}
              md={6}
              xs={12}
              className="d-flex flex-column my-5"
            >
              <div className={`${style.name_wrapper} my-auto`}>
                <span className="text-black-50">Name: </span>
                <h5 className="pl-4">{this.state.candidate.name}</h5>
              </div>
              <div className={`${style.email_wrapper} my-auto`}>
                <span className="text-black-50">Email: </span>
                <h5 className="pl-4">{this.state.candidate.email}</h5>
              </div>
            </Col>
            <Col
              xl={4}
              lg={4}
              md={6}
              xs={12}
              className="d-flex flex-column my-5"
            >
              <div className={`${style.dob_wrapper} my-auto`}>
                <span className="text-black-50">Date of birth: </span>
                <h5 className="pl-4">{this.state.candidate.birthday}</h5>
              </div>
              <div className={`${style.name_wrapper} my-auto`}>
                <span className="text-black-50">Education: </span>
                <h5 className="pl-4">{this.state.candidate.education}</h5>
              </div>
            </Col>
            <Col xs={12} xl={12} md={12} lg={12}>
              <ReportsTable candidateId={this.props.match.params.id} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export { CandidateReports };
