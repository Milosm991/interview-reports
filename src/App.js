import React from "react";
import { Container } from "react-bootstrap";

import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";


function App() {
  return (
    <div className="App">

      <Container>
        <Route exact path='/' component={ListOfCandidates} />
      </Container>

      <Switch>
        <Route exact path="/admin" component={LoginForm} />
      </Switch>

    </div>
  );
}

export default App;
