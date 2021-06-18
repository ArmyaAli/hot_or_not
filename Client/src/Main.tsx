import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { SubmissionPage } from "./Pages/SubmissionPage";

const Main = () => {
  return (
      <Router>
        <Switch>
          <Route path="/submission">
            <SubmissionPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
  );
};

export default Main;
