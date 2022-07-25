import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    IconButton
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '80px auto 0 auto',
        minHeight: '300px',
        width: '100%'
    },
    list: {
        margin: '20px auto 20px auto',
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    card: {
        margin: '20px auto 20px auto',
        textAlign: 'center',
        width: '90%',
    },
    teamLogo: {
        height: '200px',
        width: '200px',
        margin: '0 auto 0 auto',
    },
}));
const TeamInfo = () => {
    let { teamID } = useParams();
    const [players, setPlayers] = useState([]);
    const [teamName, setTeamName] = useState('');
    const [games, setGames] = useState([]);
    const [teamLogo, setTeamLogo] = useState('');
    const [currentSeason, setCurrentSeason] = useState([]);
    const [secondImage, setSecondImage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        const sendGetRequest = async () => {
            try {
                const resp = await axios.get(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/team/${teamID}`);
                setTeamName(resp.data.teamName)
                setPlayers(resp.data.players);
                setGames(resp.data.games)
                setTeamLogo(resp.data.image)
                setCurrentSeason(resp.data.seasons?.[0])
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        sendGetRequest()
    }, [teamID]);
    let teamStatsMarkup = isLoading ? <Typography variant="h5" style={{ margin: '140px auto 0 auto', textAlign: 'center' }}>Učitavanje</Typography> :
        <>
            {
                <Card className={classes.card}>
                    <CardContent>
                        <Grid container direction="row">
                            <Grid item xs={12} sm={4}>
                                <img src={teamLogo} className={classes.teamLogo} alt="Logo Tima" />
                                <Typography variant="h5" align="center">{teamName}</Typography>
                                <Typography variant="subtitle1" style={{ marginTop: '10%' }}>
                                    Bodovi
                                </Typography>
                                <Typography variant="h3" color="primary">
                                    {currentSeason.stats?.[0]}
                                </Typography>
                                <Typography variant="subtitle1" style={{ marginTop: '10%' }}>
                                    Mesto na tabeli
                                </Typography>
                                <Typography variant="h3" style={{ color: '#34d5ad' }}>
                                    {currentSeason.rank}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Typography variant="h5" align="center" style={{ color: '#15996b', margin: '7% auto 5px auto' }}>
                                    {currentSeason.leagueName.toUpperCase()}
                                </Typography>
                                <Typography variant="h6" align="center" style={{ margin: '10px auto 15px auto', display: 'bold' }}>
                                    {currentSeason.year}
                                </Typography>
                                <Grid container
                                    direction="row"
                                    spacing={2}
                                    justify="center"
                                    align="center"
                                >
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Igrali
                                        </Typography>
                                        <Typography variant="h5">
                                            {currentSeason.stats?.[1] + currentSeason.stats?.[2]}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Pobede
                                        </Typography>
                                        <Typography variant="h5" className={classes.title}>
                                            {currentSeason.stats?.[1]}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Porazi
                                        </Typography>
                                        <Typography variant="h5" className={classes.title}>
                                            {currentSeason.stats?.[2]}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Poeni +
                                        </Typography>
                                        <Typography variant="h6" className={classes.title}>
                                            {currentSeason.stats?.[3]}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Poeni -
                                        </Typography>
                                        <Typography variant="h6" className={classes.title}>
                                            {currentSeason.stats?.[4]}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Koš razlika
                                        </Typography>
                                        <Typography variant="h6" className={classes.title}>
                                            {currentSeason.stats?.[3] - currentSeason.stats?.[4]}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container
                                    direction="row"
                                    spacing={2}
                                    justify="center"
                                    align="center"
                                >
                                    <Grid item xs={1} sm={3} />
                                    <Grid item xs={3} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            1 p
                                        </Typography>
                                        <Typography variant="h6">
                                            {`${currentSeason.stats?.[5]}/${currentSeason.stats?.[6]}`}
                                        </Typography>
                                        <Typography variant="h6">
                                            65%
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            2 p
                                        </Typography>
                                        <Typography variant="h6">
                                            {`${currentSeason.stats?.[7]}/${currentSeason.stats?.[8]}`}
                                        </Typography>
                                        <Typography variant="h6">
                                            50%
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            3 p
                                        </Typography>
                                        <Typography variant="h6">
                                            {`${currentSeason.stats?.[9]}/${currentSeason.stats?.[10]}`}
                                        </Typography>
                                        <Typography variant="h6">
                                            27%
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={3} />
                                </Grid>

                                <Grid container
                                    direction="row"
                                    spacing={2}
                                    justify="center"
                                    align="center"
                                    style={{ margin: '10px auto 0px auto' }}>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Asistencije
                                        </Typography>
                                        <Typography variant="h6">
                                            {currentSeason.stats?.[11]}
                                        </Typography>
                                        <Typography variant="subtitle1" color="secondary">
                                            {
                                                (Math.round(currentSeason.stats?.[11] / (currentSeason.stats?.[1] + currentSeason.stats?.[2]) * 100) / 100).toFixed(2)
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Ukradene
                                        </Typography>
                                        <Typography variant="h6">
                                            {currentSeason.stats?.[12]}
                                        </Typography>
                                        <Typography variant="subtitle1" color="secondary">
                                            {
                                                (Math.round(currentSeason.stats?.[12] / (currentSeason.stats?.[1] + currentSeason.stats?.[2]) * 100) / 100).toFixed(2)
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Blokade
                                        </Typography>
                                        <Typography variant="h6">
                                            {currentSeason.stats?.[13]}
                                        </Typography>
                                        <Typography variant="subtitle1" color="secondary">
                                            {
                                                (Math.round(currentSeason.stats?.[13] / (currentSeason.stats?.[1] + currentSeason.stats?.[2]) * 100) / 100).toFixed(2)
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Skokovi
                                        </Typography>
                                        <Typography variant="subtitle1" >
                                            {currentSeason.stats?.[14] + currentSeason.stats?.[15]}/{`${currentSeason.stats?.[14]}-${currentSeason.stats?.[15]}`}
                                        </Typography>
                                        <Typography variant="subtitle1" color="secondary">
                                            {
                                                (Math.round((currentSeason.stats?.[14] + currentSeason.stats?.[15]) / (currentSeason.stats?.[1] + currentSeason.stats?.[2]) * 100) / 100).toFixed(2)
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Izgubljene
                                        </Typography>
                                        <Typography variant="h6">
                                            {currentSeason.stats?.[16]}
                                        </Typography>
                                        <Typography variant="subtitle1" color="secondary">
                                            {
                                                (Math.round(currentSeason.stats?.[16] / (currentSeason.stats?.[1] + currentSeason.stats?.[2]) * 100) / 100).toFixed(2)
                                            }
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4} sm={2}>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Faulovi
                                        </Typography>
                                        <Typography variant="h6">
                                            {currentSeason.stats?.[17]}
                                        </Typography>
                                        <Typography variant="subtitle1" color="secondary">
                                            {
                                                (Math.round(currentSeason.stats?.[17] / (currentSeason.stats?.[1] + currentSeason.stats?.[2]) * 100) / 100).toFixed(2)
                                            }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            }
        </>
    let playersMarkup = isLoading ? '' :
        <>
            {
                players.map((player) =>
                    <>
                        <Grid item xs={6} sm={3}>
                            <Card >
                                <CardMedia
                                    component="img"
                                    alt="Player Image"
                                    image="https://cargoliga.rs/wp-content/uploads/1988/04/301-270x300.png"
                                />
                                <CardContent>
                                    <Typography variant="h6">{player.jersey}.{player.name}</Typography>
                                    <Typography variant="subtitle1" color="secondary">{player.position}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </>
                )
            }
        </>
    let gamesMarkup = isLoading ? '' :
        <>
            {
                games.map((game) =>
                    <>
                        <Grid item xs={12} sm={3} lg={3}>
                            <Card style={{ borderRadius: '20px' }}>
                                <CardActionArea component={Link} to={`/game/${game.gameID}`}>
                                    <CardContent>
                                        <Typography variant="subtitle2" color="textSecondary" align="center" style={{ marginBottom: '10px' }}>{game.time.toUpperCase()}</Typography>
                                        <Grid container
                                            justify="center"
                                            spacing={2}>
                                            <Grid item xs={6} style={{ backgroundColor: '#fff', textAlign: 'center' }}>
                                                <IconButton component={Link} to={`/team/${game.firstTeam}`}>
                                                    <img src={teamLogo} alt="Home" style={{ width: '100px', height: '100px' }} />
                                                </IconButton>
                                                <Typography variant="body1" align="center"><b>{game.firstTeam}</b></Typography>
                                            </Grid>
                                            <Grid item xs={6} style={{ backgroundColor: '#fff', textAlign: 'center' }}>
                                                <IconButton component={Link} to={`/team/${game.secondTeam}`}>
                                                    <img src={secondImage} alt="Home" style={{ width: '100px', height: '100px' }} />
                                                </IconButton>
                                                <Typography variant="body1" align="center"><b>{game.secondTeam}</b></Typography>
                                            </Grid>
                                            <Typography variant="h6" align="center">{game.score}</Typography>
                                            <Typography variant="subtitle2" color="primary">{game.location}</Typography>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid >
                    </>
                )
            }
        </>
    return (
        <Grid container
            direction="column"
            spacing={2}
            className={classes.root}>
            <Grid container
                align="center"
                spacing={2}
                className={classes.list}>
                {teamStatsMarkup}
            </Grid>
            <Typography variant="h5" align="center">Igrači</Typography>
            <Grid container
                align="center"
                spacing={2}
                className={classes.list}>
                {playersMarkup}
            </Grid>
            <Typography variant="h5" align="center">Odigrane utakmice</Typography>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1} className={classes.list}>
                {gamesMarkup}
            </Grid>
        </Grid >
    )
}

export default TeamInfo;