import React from "react";
import { Link } from "react-router-dom";

//Material UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

//App
import { Page, Card } from "../../components";

//Styles
import "./Domains.scss";

function createData(
  id,
  client,
  domain,
  platform,
  contact,
  renewal,
  domainPackage
) {
  return { id, client, domain, platform, contact, renewal, domainPackage };
}

//Example Data
const rows = [
  createData(
    1,
    "Fluid Studios LTD",
    "fluidstudiosltd.com",
    "STORM",
    "Toby Gates",
    "12/10/2020",
    "Hosting"
  ),
  createData(
    2,
    "Fluid Studios LTD",
    "fluidstudiosltd.com",
    "STORM",
    "Toby Gates",
    "12/10/2020",
    "Domain"
  ),
  createData(
    3,
    "Fluid Studios LTD",
    "fluidstudiosltd.com",
    "STORM",
    "Toby Gates",
    "12/10/2020",
    "SSL"
  ),
];

function Domains() {
  return (
    <Page>
      <div className="page__actions">
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Dashboard</Link>
            <Typography color="textPrimary">Domains</Typography>
          </Breadcrumbs>
        </div>
        <div className="page__buttons">
          <Button variant="contained" color="primary">
            Add Domain
          </Button>
        </div>
      </div>
      <div className="page__filters">
        <Card>
          <form>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </Card>
      </div>
      <div className="page__results">
        <TableContainer component={Paper}>
          <Table aria-label="Projects">
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell>Domain</TableCell>
                <TableCell>Primary Contact</TableCell>
                <TableCell>Platform</TableCell>
                <TableCell>Renewal</TableCell>
                <TableCell>Package</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th">{row.client}</TableCell>
                  <TableCell>
                    <a href={`//${row.domain}`} target="_blank">
                      {row.domain}
                    </a>
                  </TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>{row.platform}</TableCell>
                  <TableCell>{row.renewal}</TableCell>
                  <TableCell>{row.domainPackage}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Page>
  );
}

export default Domains;
