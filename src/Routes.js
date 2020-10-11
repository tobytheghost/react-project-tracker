import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//App
import {
  Account,
  Clients,
  Documentation,
  Domains,
  Error,
  Home,
  MonthlyContracts,
  Projects,
  SalesQuotes,
  Settings,
  Tools,
} from "./views";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/account" component={Account} />
          <Route path="/clients" component={Clients} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/domains" component={Domains} />
          <Route path="/monthly-contracts" component={MonthlyContracts} />
          <Route path="/projects" component={Projects} />
          <Route path="/sales-quotes" component={SalesQuotes} />
          <Route path="/settings" component={Settings} />
          <Route path="/tools" component={Tools} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
