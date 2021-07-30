import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton, Typography, ThemeProvider } from '@material-ui/core';
import HomeRounded from '@material-ui/icons/HomeRounded';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#002884',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f50057',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
});
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    margin: '0 auto 0 0'
  },
  signupButton: {
    marginLeft: '2px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    }
  },
  loginButton: {
    marginRight: '2px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
    }
  },
  title: {
    margin: '0 auto 0 auto',
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isAuthenticated, setAuthenticated] = useContext(AuthContext);
  const [userName, setUserName] = useContext(UserContext);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="end"
            className={classes.homeButton}
            color="inherit"
            aria-label="menu">
            <SportsBasketballIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Basketball Stats
          </Typography>
          {isAuthenticated ? (
            <>
              <IconButton
                component={Link}
                to="/dashboard"
                edge="end"
                className={classes.homeButton}
                color="inherit"
                aria-label="menu"
              >
                <VerifiedUserIcon fontSize="large" />
              </IconButton>{userName}
              <IconButton
                color="inherit"
                onClick={() => {
                  localStorage.clear();
                  setAuthenticated(false);
                  setUserName("");
                }}
                className={classes.signupButton}
              ><HighlightOffRoundedIcon fontSize="small" /></IconButton>
            </>) : (
            <>
              <IconButton
                component={Link}
                to="/dashboard"
                edge="end"
                className={classes.homeButton}
                color="inherit"
                aria-label="menu"
              >
                <HomeRounded fontSize="large" />
              </IconButton>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                className={classes.loginButton}
              >Login</Button>
              <Button
                color="inherit"
                component={Link}
                to="/signup"
                className={classes.signupButton}
              >Signup</Button>
            </>)}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Navbar;
