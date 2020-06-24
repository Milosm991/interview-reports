import React from "react";
import { Row, Col } from "react-bootstrap";
import { Footer } from "../../Footer/Footer";
import { IRHeader } from "../IRHeader/IRHeader";
import style from "./CandidateReports.module.scss";
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
        <Row>
          <Col xs={4} className="my-5">
            <img
              className={style.avatar}
              src={this.state.candidate.avatar}
              alt="Candidate painting"
            />
          </Col>
          <Col xs={4} className="d-flex flex-column my-5">
            <div className={`${style.name_wrapper} my-auto`}>
              <span className="text-black-50">Name: </span>
              <h5 className="pl-4">{this.state.candidate.name}</h5>
            </div>
            <div className={`${style.email_wrapper} my-auto`}>
              <span className="text-black-50">Email: </span>
              <h5 className="pl-4">{this.state.candidate.email}</h5>
            </div>
          </Col>
          <Col xs={4} className="d-flex flex-column my-5">
            <div className={`${style.dob_wrapper} my-auto`}>
              <span className="text-black-50">Date of birth: </span>
              <h5 className="pl-4">{this.state.candidate.birthday}</h5>
            </div>
            <div className={`${style.name_wrapper} my-auto`}>
              <span className="text-black-50">Education: </span>
              <h5 className="pl-4">{this.state.candidate.education}</h5>
            </div>
          </Col>
          <Col xs={12}>
            <ReportsTable candidateId={this.props.match.params.id} />
          </Col>
        </Row>
        <Footer />
      </>
    );
  }
}

export { CandidateReports };
