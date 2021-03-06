import React, { Component } from 'react';
import SignUp from './Containers/SignUp';
import SignIn from './Containers/SingIn';
import Profile from './Containers/Profile';
import requireAuth from './hoc/requireAuth';
import requireNotAuth from './hoc/requireNotAuth';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import { purple } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors/";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue,
  },
  status: {
    danger: 'orange',
  },
});

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container
          alignItems='center'
          style={{ height: '100%' }}
        >
          <Grid item xs={12}>
            <Paper
              elevation={4}
              style={{ margin: 32 }}
            >
              <Grid container
                alignItems='center'
                justify='center'>
                <Grid container item xs={12}
                  alignContent='center'
                >
                  <Grid item xs={12} sm={6}
                    style={{ 'textAlign': 'center' }}
                  >
                    <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt='homerImg' />
                  </Grid>
                  <BrowserRouter>
                    <Switch>
                      <Redirect exact from='/' to='/profile' />
                      <Route path={'/sign-in'} component={requireNotAuth(SignIn)} />
                      <Route path='/sign-up' component={SignUp} />
                      <Route path='/profile' component={requireAuth(Profile)} />
                    </Switch>
                  </BrowserRouter>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider >
    );
  }
}
