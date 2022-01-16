import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EditEmployee from "./components/edit-employee-page/edit-employee-page";
import EmployeesPage from "./components/employees-page/employees-page";
import ErrorPage from "./components/error-page/error-page";
import HomePage from "./components/home-page/home-page"
import TemplatesPage from "./components/templates-page/templates-page";

const App: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/edit-employee">
          <EditEmployee />
        </Route>
        <Route exact path="/employees">
          <EmployeesPage />
        </Route>
        <Route exact path="/templates">
          <TemplatesPage />
        </Route>
        <Route exact path="/error">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;