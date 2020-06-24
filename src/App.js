import React from "react";
import { Switch, Route } from "react-router-dom";

import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";
import { SubmitReport } from './components/ReportsAdministrator/LoginForm/SubmitReport/SubmitReport'
import ListOfReports from "./components/ReportsAdministrator/ListOfReports/ListOfReports";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListOfCandidates} />
        <Route exact path="/admin" component={LoginForm} />
        <Route exact path="/admin/create_report" component={SubmitReport} />
        <Route exact path="/admin/list_of_reports" component={ListOfReports} />
      </Switch>
    </div>
  );
}

export default App;
