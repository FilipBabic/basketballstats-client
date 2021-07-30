import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton, Card, CardContent, CardHeader } from '@material-ui/core';
import Dashboard from '@material-ui/icons/Dashboard';
// import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import BuildIcon from '@material-ui/icons/Build';
import ResumeLogo from '../images/resumeImages/filip_logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '80px auto 0 auto',
        textAlign: 'center'
    },
    button: {
        margin: '0 auto 0 auto',
        textAlign: 'center',
        height: '50px',
        minWidth: '50px'
    },
    logo: {
        margin: '0 auto 0 auto',
        textAlign: 'center',
        height: '40px',
        minWidth: '40px',
        backgroundColor: "#002884"
    },
    card: {
        flexGrow: 1,
        maxWidth: '320px',
        margin: '10px auto 0 auto',
        textAlign: 'center',
        backgroundColor: '#f0f2f0'
    },
    buildIcon: {
        margin: '20px auto 20px auto',
        width: '200px',
        height: '200px',
        color: '#dce3de',
        backgroundColor: 'white'
    },
    unauthenticated: { color: '#000', marginTop: '50px' },
    item: { margin: '10px auto 10px auto' }
}));
const Home = () => {
    const classes = useStyles();
    const [isAuthenticated, setAuthenticated] = useContext(AuthContext);
    const [userName] = useContext(UserContext);
    let token = localStorage.FBidToken;
    if (!token) {
        setAuthenticated(false);
    } else {
        setAuthenticated(true);
    }
    console.log("is Authenticated: ", isAuthenticated);
    console.log("USER NAME: ", userName);
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.item} xs={12}>
                <Typography variant="h5" className={classes.title}>
                    {isAuthenticated ? (`Hello, ${userName} `) : ("")}
                    Welcome to Basketball Stats!!!
                </Typography>
                {
                    isAuthenticated ? (
                        <>
                            <IconButton
                                component={Link}
                                to="/dashboard"
                                className={classes.button}
                                color="inherit">
                                <Dashboard fontSize="large" />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Dashboard
                            </Typography>
                            <IconButton
                                component={Link}
                                to="/filipresume"
                                className={classes.button}
                                color="inherit">
                                <img src={ResumeLogo} alt="Resume Logo" className={classes.logo} />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Filip's Portfolio
                            </Typography>
                            {/* <IconButton
                                component={Link}
                                to="/editprofile"
                                className={classes.button}
                                color="inherit">
                                <AccountCircleSharpIcon fontSize="large" />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Customize Profile
                            </Typography> */}
                        </>) : (
                        <Card className={classes.card}>
                            <CardHeader title="Hello" />
                            <CardContent>
                                <Typography variant="h5">This web site is</Typography>
                                <Typography variant="h5">under construction</Typography>
                                <BuildIcon fontSize="large" className={classes.buildIcon} />
                                <Typography variant="h6" className={classes.unauthenticated}>
                                    Please <Link to="/signup"> Regiser </Link> or <Link to="/login"> Log in </Link>to see more content
                                </Typography>
                            </CardContent>
                        </Card>)
                }
            </Grid>
        </Grid>
    )
}

export default Home;