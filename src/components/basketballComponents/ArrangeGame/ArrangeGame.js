import React, { useState, useContext } from 'react'
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { arrangeGame } from '../../../actions'
import { AuthContext } from '../../../context/AuthContext';
// import { UserContext } from '../context/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button, CircularProgress } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '80px',
        textAlign: 'center'
    },
    image: { margin: '20px auto 20px auto' },
    title: { margin: '10px auto 10px auto' },
    button: { margin: '20px auto 10px auto', position: 'relative' },
    customError: { fontSize: '0.8 rem' },
    progress: { position: 'absolute', color: 'yellow' }
}));

const ArrangeGame = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch()
    const [isAuthenticated, setAuthenticated] = useContext(AuthContext);
    const [firstTeam, setFirstTeam] = useState('');
    const [secondTeam, setSecondTeam] = useState('');
    const [gameTime, setGameTime] = useState('');
    const [gameLocation, setGameLocation] = useState('');
    const loading = useSelector(state => state.games.loading)
    const [errors, setErrors] = useState([]);
    const [firstImage, setFirstImage] = useState('')
    const [secondImage, setSecondImage] = useState('')
    const teamImages = ["https://cornliga.rs/wp-content/uploads/2018/08/old-school-128x128.png",
        "https://cornliga.rs/wp-content/uploads/2018/08/caffe-kvart-128x128.png", "https://cornliga.rs/wp-content/uploads/2018/08/Lions-128x111.png"]
    const addGame = (event) => {
        console.log('HEllo', isAuthenticated);

        event.preventDefault();

        if (firstTeam === "OLD SCHOOL") {
            setFirstImage(teamImages[0])
        } else if (secondTeam === "OLD SCHOOL") {
            setSecondImage(teamImages[0])
        }
        if (firstTeam === "CAFFE KVART") {
            setFirstImage(teamImages[1])
        } else if (secondTeam === "CAFFE KVART") {
            setSecondImage(teamImages[1])
        }
        if (firstTeam === "FLAMING LIONS") {
            setFirstImage(teamImages[2])
        } else if (secondTeam === "FLAMING LIONS") {
            setSecondImage(teamImages[2])
        }
        console.log("first Image: ", firstImage)
        console.log("second Image: ", secondImage)
        const addGame = {
            firstTeam: firstTeam,
            secondTeam: secondTeam,
            gameTime: gameTime,
            gameLocation: gameLocation,
            firstImage: firstImage,
            secondImage: secondImage,
        }
        dispatch(arrangeGame(addGame))
    };
    return (
        <Grid container className={classes.root}>
            <Grid item sm />
            <Grid item sm>
                <Typography variant="h4" className={classes.title}>
                    Zakaži utakmicu
                </Typography>
                <form noValidate onSubmit={addGame}>
                    <TextField id="firstTeam"
                        name="firstTeam"
                        type="firstTeam"
                        label="Prva ekipa"
                        helperText={errors.firstTeam}
                        error={errors.firstTeam ? true : false}
                        className={classes.textField}
                        value={firstTeam}
                        onChange={(event) => setFirstTeam(event.target.value)}
                        fullWidth
                    />
                    <TextField id="secondTeam"
                        name="secondTeam"
                        type="secondTeam"
                        label="Druga ekipa"
                        value={secondTeam}
                        helperText={errors.secondTeam}
                        error={errors.secondTeam ? true : false}
                        className={classes.textField}
                        onChange={(event) => setSecondTeam(event.target.value)}
                        fullWidth
                    />
                    <TextField id="gameTime"
                        name="gameTime"
                        type="gameTime"
                        label="Vreme"
                        value={gameTime}
                        helperText={errors.gameTime}
                        error={errors.gameTime ? true : false}
                        className={classes.textField}
                        onChange={(event) => setGameTime(event.target.value)}
                        fullWidth
                    />
                    <TextField id="gameLocation"
                        name="gameLocation"
                        type="text"
                        label="Lokacija"
                        value={gameLocation}
                        helperText={errors.gameLocation}
                        error={errors.gameLocation ? true : false}
                        className={classes.textField}
                        onChange={(event) => setGameLocation(event.target.value)}
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
                        Zakaži utakmicu
                    </Button>
                </form>
            </Grid>
            <Grid item sm />
        </Grid>
    )
}

export default ArrangeGame;