import React from "react";
import { Link } from "react-router-dom";

//Material Ui
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
import "./Clients.scss";

function createClientData(id, client, primaryName, primaryEmail, date) {
  return { id, client, primaryName, primaryEmail, date };
}

//Example Data
const rows = [
  createClientData(
    1,
    "Fluid Studios LTD",
    "Toby Gates",
    "toby@fluidstudiosltd.com",
    "01/07/2019"
  ),
];

function Clients() {
  return (
    <Page>
      <div className="page__actions">
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Dashboard</Link>
            <Typography color="textPrimary">Clients</Typography>
          </Breadcrumbs>
        </div>
        <div className="page__buttons">
          <Button variant="contained" color="primary">
            Add Client
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
                <TableCell>Client Name</TableCell>
                <TableCell>Primary Contact Name</TableCell>
                <TableCell>Primary Contact Email</TableCell>
                <TableCell>Date Added</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th">
                    <Link to={`/clients/${row.id}`}>{row.client}</Link>
                  </TableCell>
                  <TableCell>{row.primaryName}</TableCell>
                  <TableCell>
                    <a href={`mailto:${row.primaryEmail}`}>
                      {row.primaryEmail}
                    </a>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Button variant="contained">
                      <Link to={`/clients/${row.id}`}>View</Link>
                    </Button>
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

export default Clients;
