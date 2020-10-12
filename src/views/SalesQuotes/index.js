import React from "react";
import { Link } from "react-router-dom";

//MaterialUI
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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

//App
import { Page, Card } from "../../components";

//Styles
import "./SalesQuotes.scss";
import { Divider } from "@material-ui/core";

function createQuoteData(
  id,
  client,
  title,
  added,
  assigned,
  status,
  dateAdded,
  dateDue,
  notes
) {
  return {
    id,
    client,
    title,
    added,
    assigned,
    status,
    dateAdded,
    dateDue,
    notes,
  };
}

function createUserData(id, username, displayName) {
  return { id, username, displayName };
}

//Example Data
const rows = [
  createQuoteData(
    1,
    "Fluid",
    "Update homepage",
    "Greg",
    "Toby",
    "Approved",
    "08/10/2020",
    "15/10/2020",
    "Some notes about the project"
  ),
  createQuoteData(
    2,
    "Fluid",
    "Update homepage",
    "Greg",
    "Toby",
    "Approved",
    "08/10/2020",
    "15/10/2020",
    "Some notes about the project"
  ),
  createQuoteData(
    3,
    "Fluid",
    "Update homepage",
    "Greg",
    "Toby",
    "Approved",
    "08/10/2020",
    "15/10/2020",
    "Some notes about the project"
  ),
];

const users = [
  createUserData(1, "alan", "Alan"),
  createUserData(2, "greg", "Greg"),
  createUserData(3, "toby", "Toby"),
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "1rem",
    borderRadius: "4px",
    border: "0px",
    outline: "none",
  },
}));

function SalesQuotes() {
  const [open, setOpen] = React.useState(false);
  // const [activeQuote, setActiveQuote] = React.useState(null);
  const [status, setStatus] = React.useState("");
  const [selectedDueDate, setSelectedDueDate] = React.useState();

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // setActiveQuote(null);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDueDateChange = (date) => {
    setSelectedDueDate(date);
  };

  return (
    <Page>
      <div className="page__actions">
        <div className="breadcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">Dashboard</Link>
            <Typography color="textPrimary">Sales & Quotes</Typography>
          </Breadcrumbs>
        </div>
        <div className="page__buttons">
          <Button variant="contained" color="primary">
            Add Quote
          </Button>
        </div>
      </div>
      <div className="page__filters">
        <Card>
          <form>
            <div className="page__search">
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
            </div>
            <div className="page__filter-options">
              <div className="item">
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Archived"
                />
              </div>
            </div>
            <div className="page__filter-users">
              {users.map(({ id, username, displayName }) => (
                <div className="item" key={id}>
                  <FormControlLabel
                    control={<Checkbox name={username} color="primary" />}
                    label={displayName}
                  />
                </div>
              ))}
            </div>
          </form>
        </Card>
      </div>
      <div className="page__results">
        <TableContainer component={Paper}>
          <Table aria-label="Quotes">
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Added</TableCell>
                <TableCell>Assigned</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date Added</TableCell>
                <TableCell>Date Due</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th">{row.client}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.added}</TableCell>
                  <TableCell>{row.assigned}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.dateAdded}</TableCell>
                  <TableCell>{row.dateDue}</TableCell>
                  <TableCell>{row.notes}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(row) => {
                        handleOpen();
                        // setActiveQuote(row.id);
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h3 className="modal__title">View/Modify Quote</h3>
            <Divider />
            <form>
              <div className="modal__container">
                <div className="modal__row">
                  <div className="modal__col modal__col--half">
                    <TextField id="quote-client" label="Client" />
                  </div>
                  <div className="modal__col modal__col--half">
                    <TextField id="quote-title" label="Title" />
                  </div>
                </div>
                <div className="modal__row">
                  <div className="modal__col">
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">
                        Age
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={status}
                        onChange={handleStatusChange}
                        label="Age"
                      >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="waiting">Waiting</MenuItem>
                        <MenuItem value="approved">Approved</MenuItem>
                        <MenuItem value="invoice">Ready To Invoice</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="modal__row">
                  <div className="modal__col modal__col--half">
                    <TextField id="quote-assigned" label="Assigned To" />
                  </div>
                  <div className="modal__col">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="dd/MM/yyyy"
                        value={selectedDueDate}
                        onChange={handleDueDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </div>
                <div className="modal__row">
                  <div className="modal__col">
                    <TextField
                      id="quote-price"
                      label="Price"
                      multiline
                      rows={4}
                    />
                  </div>
                </div>
                <div className="modal__row">
                  <div className="modal__col">
                    <TextField
                      id="quote-quote"
                      label="Quote"
                      multiline
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </Page>
  );
}

export default SalesQuotes;
