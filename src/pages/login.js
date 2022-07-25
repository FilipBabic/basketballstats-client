import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import Logo from '../images/icon.png';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '80px',
        padding: '0 30px 0 30px',
        textAlign: 'center'
    },
    image: { margin: '20px auto 20px auto' },
    title: { margin: '10px auto 10px auto' },
    button: { margin: '20px auto 10px auto', position: 'relative' },
    customError: { fontSize: '0.8 rem' },
    progress: { position: 'absolute', color: 'yellow' }
}));
const Login = () => {
    const classes = useStyles();
    //
    const history = useHistory();
    const [isAuthenticated, setAuthenticated] = useContext(AuthContext);
    const [userName, setUserName] = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const handleSubmit = (event) => {
        console.log('HEllo', userName, isAuthenticated);
        event.preventDefault();
        setLoading(true);
        const userData = {
            email: email,
            password: password
        }
        console.log('email: ', email);
        console.log('user data : ', userData);
        axios.post('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/login', userData)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('FBidToken', `Bearer ${res.data.token}`)
                setAuthenticated(true);
                axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/user', {
                    headers: {
                        'Authorization': `${localStorage.FBidToken}`
                    }
                }).then((res) => {
                    let user = res.data.credentials.handle.charAt(0).toUpperCase() + res.data.credentials.handle.slice(1)
                    setUserName(user)
                }).catch((error) => {
                    console.error(error)
                })
                setLoading(false);
                history.push("/dashboard");
            })
            .catch(err => {
                setErrors(err.response.data);
                console.log(errors);
                setLoading(false);
            })
    };
    return (
        <Grid container className={classes.root}>
            <Grid item sm />
            <Grid item sm>
                <img src={Logo} alt="Basketball stats" className={classes.image} />
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
                    {errors.general && (
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
                        {loading && (<CircularProgress size={30} className={classes.progress} />)}
                        Prijavi se
                    </Button>
                </form>
            </Grid>
            <Grid item sm />
        </Grid>
    )
}

export default Login;