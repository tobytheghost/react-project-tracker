import React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Breadcrumbs } from "@material-ui/core";

import { Card, Page } from "../../components";

import "./Home.scss";

function Home() {
  return (
    <Page>
      <div className="page__actions">
        <div className="breadcrumbs">
          <Breadcrumbs>
            <Typography color="textPrimary">Dashboard</Typography>
          </Breadcrumbs>
        </div>
        <div className="page__buttons"></div>
      </div>
      <div className="page__main">
        <div className="page__row">
          <div className="page__col page__col--third">
            <Card>Some</Card>
          </div>
          <div className="page__col page__col--third">
            <Card>Interesting</Card>
          </div>
          <div className="page__col page__col--third">
            <Card>Data</Card>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Home;
