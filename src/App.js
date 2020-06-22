import React from "react";
import { Container } from "react-bootstrap";
import { IRHeader } from "./components/InterviewReports/IRHeader/IRHeader";
import { ListOfCandidates } from "./components/InterviewReports/ListOfCandidates/ListOfCandidates";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";


function App() {
  return (
    <div className="App">

      <IRHeader />
      <Container>
        <ListOfCandidates />
      </Container>

      <Switch>
        <Route exact path="/admin" component={LoginForm} />
      </Switch>

    </div>
  );
}

export default App;
