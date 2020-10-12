import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Page } from "../../../components";
import { Breadcrumbs } from "@material-ui/core";

function Client() {
  const { clientId } = useParams();

  return (
    <Page>
      <div className="page__actions">
        <div className="breadcrumbs">
          <Breadcrumbs>
            <Link to="/">Dashboard</Link>
            <Link to="/clients">Clients</Link>
            <Typography color="textPrimary">Client (ID: {clientId})</Typography>
          </Breadcrumbs>
        </div>
        <div className="page__buttons">
          <Button variant="contained" color="primary">
            Add Contact
          </Button>
        </div>
      </div>
      <div className="page__filters"></div>
      <div className="page__results"></div>
    </Page>
  );
}

export default Client;
