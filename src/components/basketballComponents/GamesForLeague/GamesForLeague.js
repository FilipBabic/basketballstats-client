import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography
} from '@material-ui/core';
import GameForLeague from './GameForLeague'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '80px auto 0 auto',
        minHeight: '300px',
        width: '100%'
    },
    list: {
        margin: '0 auto 0 auto',
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    title: {
        width: '100%',
        textAlign: 'center'
    }
}));
const GamesForLeague = () => {
    let { leagueID } = useParams();
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        const sendGetRequest = async () => {
            try {
                const resp = await axios.get(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/games/${leagueID}`);
                console.log(resp.data);
                setGames(resp.data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        sendGetRequest()
    }, [leagueID]);
    let gamesMarkup = isLoading ? <Typography variant="h5" style={{ margin: '120px auto 0 auto' }}>Učitavanje</Typography> :
        <>
            {
                games.map((game) => <GameForLeague game={game} key={game.gameID} />)
            }
        </>
    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
            className={classes.root}>
            <Grid container justify="center"
                alignItems="center">
                <Typography variant="h5" color="textSecondary">Završene utakmice</Typography>
            </Grid>
            {
                gamesMarkup
            }
        </Grid>
    )
}

export default GamesForLeague;