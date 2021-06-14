import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, IconButton, Typography, ThemeProvider } from '@material-ui/core';
import HomeRounded from '@material-ui/icons/HomeRounded';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

let theme = createMuiTheme();
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
  loginButton:{
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
            <HomeRounded fontSize="large"/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Basketball Stats
          </Typography>
          <IconButton 
            component={Link} 
            to="/dashboard" 
            edge="end" 
            className={classes.homeButton} 
            color="inherit" 
            aria-label="menu"
          >
            <SportsBasketballIcon fontSize="large"/>
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
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    )
}

export default Navbar;
