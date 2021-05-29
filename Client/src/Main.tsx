import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { MenuPage } from "./Pages/MenuPage";
import { SubmissionPage } from "./Pages/SubmissionPage";

const Main = () => {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/submission">
              <SubmissionPage />
            </Route>
            <Route path="/">
              <MenuPage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default Main;
