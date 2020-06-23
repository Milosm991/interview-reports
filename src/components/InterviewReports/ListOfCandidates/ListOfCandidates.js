import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Candidate } from "./Candidate/Candidate";
import style from "./ListOfCandidates.module.scss";
import { CandidateService } from "../../../services/CandidateService";
import { IRHeader } from "../IRHeader/IRHeader";
import { SearchBar } from "../../SearchBar/SearchBar.js";
import { search } from "../../../entities/search";

class ListOfCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      filteredCandidates: [],
    };
  }

  componentDidMount() {
    CandidateService.fetchAll().then((candidates) =>
      this.setState({
        candidates,
        filteredCandidates: candidates,
      })
    );
  }

  getInputValue = (value) => {
    let filteredArray = search(this.state.candidates, value);

    this.setState({ filteredCandidates: filteredArray });
    if (value === "") {
      CandidateService.fetchAll().then((candidates) =>
        this.setState({
          candidates,
          filteredCandidates: candidates,
        })
      );
    }
  };

  render() {
    return (
      <div>
        <Container>
          <IRHeader />
          <SearchBar getInputValue={this.getInputValue} />
          <Row>
            <Col className={style.wrapper} xs={12}>
              <Row>
                {this.state.filteredCandidates.map((candidate, i) => (
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
