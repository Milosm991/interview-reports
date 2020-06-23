import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Candidate } from "./Candidate/Candidate";
import style from "./ListOfCandidates.module.scss";
import { CandidateService } from "../../../services/CandidateService";
import { IRHeader } from "../IRHeader/IRHeader";

class ListOfCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    CandidateService.fetchAll().then((candidates) =>
      this.setState({
        candidates,
      })
    );
  }

  render() {
    return (
      <div>
        <Container>
          <IRHeader />
          <Row>
            <Col className={style.wrapper} xs={12}>
              <Row>
                {this.state.candidates.map((candidate, i) => (
                  <Candidate
                    key={i}
                    avatar={candidate.avatar}
                    name={candidate.name}
                    email={candidate.email}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { ListOfCandidates };
