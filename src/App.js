import React from "react";
import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";
<<<<<<< HEAD
import { SubmitReport } from './components/ReportsAdministrator/LoginForm/SubmitReport/SubmitReport'

=======
import ListOfReports from "./components/ReportsAdministrator/ListOfReports/ListOfReports";
>>>>>>> master

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListOfCandidates} />
        <Route exact path="/admin" component={LoginForm} />
<<<<<<< HEAD
        <Route exact path="/admin/create_report" component={SubmitReport} />
=======
        <Route exact path="/admin/list_of_reports" component={ListOfReports} />
>>>>>>> master
      </Switch>
    </div>
  );
}

export default App;
