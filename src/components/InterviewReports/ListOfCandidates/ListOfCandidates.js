import React from "react";
import style from "./ListOfCandidates.module.scss";

import { Footer } from "../../Footer/Footer";
import { IRHeader } from "../IRHeader/IRHeader";
import { Candidate } from "./Candidate/Candidate";
import { search } from "../../../entities/search";
import { Row, Col, Container } from "react-bootstrap";
import { SearchBar } from "../../SearchBar/SearchBar.js";
import { CandidateService } from "../../../services/CandidateService";
import { NothingFound } from "../../NothingFound/NothingFound";

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
  };

  render() {
    return (
      <div>
        <IRHeader />
        <Container>
          <SearchBar getInputValue={this.getInputValue} />
          <Row>
            <Col className={style.wrapper} xs={12}>
              <Row className="mb-5">
                {this.state.filteredCandidates.length ? (
                  this.state.filteredCandidates.map((candidate, i) => (
                    <Candidate
                      key={i}
                      id={candidate.id}
                      avatar={candidate.avatar}
                      name={candidate.name}
                      email={candidate.email}
                    />
                  ))
                ) : (
                  <NothingFound />
                )}
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export { ListOfCandidates };
