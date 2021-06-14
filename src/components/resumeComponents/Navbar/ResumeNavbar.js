import React, { useState, createRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, ThemeProvider, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import HomeRounded from '@material-ui/icons/HomeRounded';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import FilipResumeLogo from '../../../images/resumeImages/filip_logo.png';

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
  logo: {
      height: '40px',
      width: '40px',
  }
}));

const ResumeNavbar = () => {
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
            <img src={FilipResumeLogo} alt="Filip Resume Logo" className={classes.logo} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            Filip Babic portfolio website
        </Typography>
        <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit">
                <SportsBasketballIcon />
            </IconButton>         
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    )
}

export default ResumeNavbar;
