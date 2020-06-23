import React from "react";
import { Container } from "react-bootstrap";

import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { CandidateReports } from "./components/InterviewReports/CandidateReports/CandidateReports";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route exact path="/" component={ListOfCandidates} />
          <Route
            exact
            path="/candidate_info/:id"
            component={CandidateReports}
          />
        </Switch>
      </Container>
      <Switch>
        <Route exact path="/admin" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
