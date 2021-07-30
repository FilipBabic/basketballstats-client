import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, ThemeProvider, Collapse } from '@material-ui/core';
import axios from 'axios';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import ResumeLogo from '../../../images/resumeImages/filip_logo.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './styles';
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

const ResumeNavbar = () => {
  const classes = useStyles();
  const [isLiked, setIsLiked] = useState(false)
  const [open, setOpen] = useState(false);
  const [userName] = useContext(UserContext);
  const [message, setMessage] = useState("");
  const handleIsLiked = async () => {
    try {
      let res = await axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/isliked', {
        headers:
        {
          'Authorization': `${localStorage.FBidToken}`
        }
      })
      setIsLiked(res.data.isLiked);
    } catch (err) {
      console.error(err)
    }
  }
  const handleLikeResume = async () => {
    try {
      let res = await axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/likeresume', {
        headers:
        {
          'Authorization': `${localStorage.FBidToken}`
        }
      })
      console.log("DATA MESSSAGE:", res.data.message);
      console.log("DATA ONLY:", res.data);
      setOpen(true);
      setIsLiked(!isLiked);
      setMessage(res.data.message);
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    handleIsLiked()
  }, [])
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
            <img src={ResumeLogo} alt="Filip Resume Logo" className={classes.logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dear <span style={{ color: 'green' }}>{userName}</span> welcome to my portfolio website
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit">
            <SportsBasketballIcon />
          </IconButton>
          {!isLiked ? (<IconButton
            onClick={handleLikeResume}
            color="inherit">
            <FavoriteBorderIcon />
            <Typography variant="subtitle1" >
              Like
            </Typography>
          </IconButton>) : (<IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleLikeResume}
            color="inherit">
            <FavoriteIcon />
            <Typography variant="subtitle1">
              Liked
            </Typography>
          </IconButton>)
          }
        </Toolbar>
        {isLiked ? (
          <Collapse in={open}>
            <Alert severity="success" >
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Typography variant="subtitle1" color="primary">
                  {
                    message
                  }
                </Typography>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Alert>
          </Collapse>
        ) : (<Collapse in={open}>
          <Alert severity="success">
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              {
                message
              }
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </Alert>
        </Collapse>)}
      </AppBar>

    </ThemeProvider>

  )
}

export default ResumeNavbar;
