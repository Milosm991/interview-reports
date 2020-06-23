import React from "react";
import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { CandidateReports } from "./components/InterviewReports/CandidateReports/CandidateReports";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";
import { SubmitReport } from "./components/ReportsAdministrator/LoginForm/SubmitReport/SubmitReport";
import { Container } from "react-bootstrap";
import { ListOfReports } from "./components/ReportsAdministrator/ListOfReports/ListOfReports";

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
          <Route exact path="/admin" component={LoginForm} />
          <Route exact path="/admin/create_report" component={SubmitReport} />
          <Route
            exact
            path="/admin/list_of_reports"
            component={ListOfReports}
          />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
