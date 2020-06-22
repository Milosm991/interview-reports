import React from "react";
import { Container } from "react-bootstrap";
import { IRHeader } from "./components/InterviewReports/IRHeader/IRHeader";
import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";

function App() {
  return (
    <div className="App">
      <IRHeader />
      <Container>
        <ListOfCandidates />
      </Container>
    </div>
  );
}

export default App;
