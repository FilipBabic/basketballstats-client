import { Link } from 'react-router-dom';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, ThemeProvider } from '@material-ui/core';
import HomeRounded from '@material-ui/icons/HomeRounded';
import ResumeLogo from '../../../images/resumeImages/filip_logo.png';
import useStyles from './styles';
let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#162b54',
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
            Filip Babić | Web Developer
          </Typography>
          <IconButton
            component={Link}
            to="/"
            color="inherit">
            <HomeRounded className={classes.logo} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default ResumeNavbar;