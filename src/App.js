import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LoginForm } from "./components/ReportsAdministrator/LoginForm/LoginForm";
import { SubmitReport } from './components/ReportsAdministrator/LoginForm/SubmitReport/SubmitReport'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin" component={LoginForm} />
      </Switch>
      {/* <SubmitReport /> */}
    </div>
  );
}

export default App;
