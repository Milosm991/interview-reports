import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";
import { ListOfReports } from "./components/ReportsAdministrator/ListOfReports/ListOfReports";
import { CandidateReports } from "./components/InterviewReports/CandidateReports/CandidateReports";
import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";
import { SubmitReport } from "./components/ReportsAdministrator/LoginForm/SubmitReport/SubmitReport";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListOfCandidates} />
        <Route exact path="/candidate_info/:id" component={CandidateReports} />
        <Route exact path="/admin" component={LoginForm} />
        <Route exact path="/admin/create_report" component={SubmitReport} />
        <Route exact path="/admin/list_of_reports" component={ListOfReports} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
