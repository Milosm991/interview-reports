import React from "react";
import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";
import ListOfReports from "./components/ReportsAdministrator/ListOfReports/ListOfReports";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListOfCandidates} />
        <Route exact path="/admin" component={LoginForm} />
        <Route exact path="/admin/list_of_reports" component={ListOfReports} />
      </Switch>
    </div>
  );
}

export default App;
