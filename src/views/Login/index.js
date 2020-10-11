import React from "react";

//Material UI
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

//Styles
import "./Login.scss";

function Login() {
  return (
    <div className="page page--no-header">
      <div className="page__body">
        <div className="login">
          <div className="login__form">
            <form noValidate autoComplete="off">
              <TextField variant="outlined" id="username" label="Username" />
              <TextField variant="outlined" id="password" label="Password" />
              <Button variant="contained" color="primary">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
