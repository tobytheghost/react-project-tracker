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
  Client,
  MonthlyContract,
} from "./views";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/clients" component={Clients} />
          <Route path="/clients/:clientId" component={Client} />
          <Route exact path="/documentation" component={Documentation} />
          <Route exact path="/domains" component={Domains} />
          <Route exact path="/monthly-contracts" component={MonthlyContracts} />
          <Route
            path="/monthly-contracts/:contractId"
            component={MonthlyContract}
          />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/sales-quotes" component={SalesQuotes} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/tools" component={Tools} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
