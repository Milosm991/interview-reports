import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";
import ListOfReports from "./components/ReportsAdministrator/ListOfReports/ListOfReports";

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route exact path="/admin" component={LoginForm} />
          <Route path="/admin/listofreports" component={ListOfReports} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
