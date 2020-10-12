import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

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
import "./MonthlyContracts.scss";

function createMonthlyContractData(
  id,
  clientId,
  client,
  supportPackage,
  owner,
  price,
  hours,
  status
) {
  return { id, clientId, client, supportPackage, owner, price, hours, status };
}

//Example Data
const rows = [
  createMonthlyContractData(
    1,
    1,
    "Fluid Studios LTD",
    "Security, Maintenance & Management",
    "Toby",
    198,
    3,
    "Active"
  ),
];

function MonthlyContracts() {
  return (
    <Page>
      <div className="page__actions">
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Dashboard</Link>
            <Typography color="textPrimary">Monthly Contracts</Typography>
          </Breadcrumbs>
        </div>
        <div className="page__buttons">
          <Button variant="contained" color="primary">
            Add Contract
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
                <TableCell>Package</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Hours Remaining</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th">
                    <Link to={`/clients/${row.clientId}`}>{row.client}</Link>
                  </TableCell>
                  <TableCell>{row.supportPackage}</TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>
                    <NumberFormat
                      value={row.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"£"}
                    />
                  </TableCell>
                  <TableCell>{row.hours}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button variant="contained">
                      <Link to={`/monthly-contracts/${row.id}`}>View</Link>
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

export default MonthlyContracts;
