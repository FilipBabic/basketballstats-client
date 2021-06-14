import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import Logo from '../images/icon.png';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '80px',
      textAlign: 'center'
    },
    image: { margin: '20px auto 20px auto'},
    title: {margin: '10px auto 10px auto'},
    button: {margin: '20px auto 10px auto', position: 'relative'},
    customError: {fontSize:'0.8 rem'},
    progress: {position: 'absolute',color: 'yellow'}
}));

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const handleSubmit = (event) => {
    console.log('HEllo');
    event.preventDefault();
    setLoading(true);
    const userData = {
        email: email,
        password: password
    }
    console.log('email: ', email);
    console.log('user data : ', userData);
    axios.post('http://localhost:5000/basketball-stats-719f8/europe-west1/api/login', userData)
    .then(res => {
        console.log(res.data);
        localStorage.setItem('FBidToken', `Bearer ${res.data.token}`)
        setLoading(false);
        history.push("/filipresume");
    })
    .catch(err => {
        setErrors(err.response.data);
        console.log(errors);
        setLoading(false);
    })
};
    return (
        <Grid container className={classes.root}>
            <Grid item sm/>
            <Grid item sm>
                <img src={Logo} alt="Basketball stats" className={classes.image}/>
                <Typography variant="h4" className={classes.title}>
                    LOGIN
                </Typography>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField id="email"
                        name="email"
                        type="email"
                        label="Email"
                        helperText={errors.email}
                        error={errors.email ? true : false}
                        className={classes.textField}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        fullWidth
                    />
                    <TextField id="password"
                        name="password"
                        type="password"
                        label="Password"
                        value={password}
                        helperText={errors.password}
                        error={errors.password ? true : false}
                        className={classes.textField}
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                    />
                    {errors.general &&(
                        <Typography variant="body2" className={classes.customError} color="error">
                            {errors.general}
                        </Typography>
                    )}
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        className={classes.button}
                        disabled={loading}>
                        {loading && (<CircularProgress size={30} className={classes.progress}/>)}
                        Login
                    </Button>
                    <br />
                    <small>dont have an account? sign up <Link to="/signup">here</Link></small>
                </form>
            </Grid>
            <Grid item sm/>
        </Grid>
    )
}

export default Login;