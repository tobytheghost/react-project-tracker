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
import "./Projects.scss";

function createData(id, title, stage, status, platform, action, notes) {
  return { id, title, stage, status, platform, action, notes };
}

//Example Data
const rows = [
  createData(
    1,
    "Pirton",
    "Page Design",
    "In Progress",
    "Wordpress - Bespoke",
    "12/10/2020",
    "Some notes about the project"
  ),
  createData(
    2,
    "Pirton",
    "Page Design",
    "In Progress",
    "Wordpress - Bespoke",
    "12/10/2020",
    "Some notes about the project"
  ),
  createData(
    3,
    "Pirton",
    "Page Design",
    "In Progress",
    "Wordpress - Bespoke",
    "12/10/2020",
    "Some notes about the project"
  ),
];

function Projects() {
  return (
    <Page>
      <div className="page__actions">
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Dashboard</Link>
            <Typography color="textPrimary">Projects</Typography>
          </Breadcrumbs>
        </div>
        <div className="page__buttons">
          <Button variant="contained" color="primary">
            Add Project
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
                <TableCell>Project Title</TableCell>
                <TableCell>Stage</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Platform</TableCell>
                <TableCell>Next Action</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th">{row.title}</TableCell>
                  <TableCell>{row.stage}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.platform}</TableCell>
                  <TableCell>{row.action}</TableCell>
                  <TableCell>{row.notes}</TableCell>
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

export default Projects;
