import React from "react";
import { Link } from "react-router-dom";

//Components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";

//Icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import PublicIcon from "@material-ui/icons/Public";
import DescriptionIcon from "@material-ui/icons/Description";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import BuildIcon from "@material-ui/icons/Build";
import PeopleIcon from "@material-ui/icons/People";
import SettingsIcon from "@material-ui/icons/Settings";

//Styles
import "./Nav.scss";

function Nav() {
  return (
    <div className="nav">
      <List>
        <Link to="/">
          <ListItem button key="dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/projects">
          <ListItem button key="projects">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </Link>
        <Link to="/domains">
          <ListItem button key="domains">
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary="Domains" />
          </ListItem>
        </Link>
        <Link to="/documentation">
          <ListItem button key="documentation">
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItem>
        </Link>
        <Link to="/sales-quotes">
          <ListItem button key="sales-quotes">
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary="Sales & Quotes" />
          </ListItem>
        </Link>
        <Link to="/monthly-contracts">
          <ListItem button key="monthly-contracts">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Monthly Contracts" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/account">
          <ListItem button key="account">
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
        </Link>
        <Link to="/tools">
          <ListItem button key="tools">
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Tools" />
          </ListItem>
        </Link>
        <Link to="/clients">
          <ListItem button key="clients">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Clients" />
          </ListItem>
        </Link>
        <Link to="/settings">
          <ListItem button key="settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

export default Nav;
