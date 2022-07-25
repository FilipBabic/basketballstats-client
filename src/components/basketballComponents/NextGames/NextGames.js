
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getNextGames } from '../../../actions';
import NextGame from './NextGame';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '10px',
    },
    leagues: {
        padding: '10px'
    }
}));

const NextGames = ({ isAdmin }) => {
    const dispatch = useDispatch()
    const nextGames = useSelector(state => state.games.nextGames);
    const isLoading = useSelector(state => state.games.loading);
    const classes = useStyles();
    useEffect(() => {
        dispatch(getNextGames());
    }, [dispatch]);
    let nextGamesMarkup = isLoading ? <Typography variant="h5" style={{ margin: '120px auto 0 auto' }}>Trenutno nema zakazanih utakmica</Typography> :
        <>
            {
                nextGames.map((nextGame) => <NextGame nextGame={nextGame} key={nextGame.nextGameID} isAdmin={isAdmin} />)
            }
        </>
    return (
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}
            className={classes.root}>
            {
                nextGamesMarkup
            }
        </Grid>
    )
}

export default NextGames;