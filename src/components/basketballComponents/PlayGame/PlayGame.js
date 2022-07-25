import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Card, CardContent, CardActions, Button, Typography, Divider } from '@material-ui/core';
import { startGame, getFirstTeam, getSecondTeam } from '../../../actions';
const PlayGame = () => {
    let { gameID, firstID, secondID } = useParams();
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.credentials)
    const game = useSelector(state => state.startGame.game)
    const firstTeam = useSelector(state => state.startGame.firstTeam)
    const secondTeam = useSelector(state => state.startGame.secondTeam)
    const currentGame = useSelector(state => state.startGame.game)
    // const loading = useSelector(state => state.startGame.loading)
    const [onCourt, setOnCourt] = useState([]);
    const [stOnCourt, setStOnCourt] = useState([]);
    const [disable, setDisable] = useState()
    const [open, setOpen] = useState(false)
    const [stOpen, setStOpen] = useState(false)
    const [ftScore, setFtScore] = useState(0)
    const [stScore, setStScore] = useState(0)
    const [isStarted, setIsStarted] = useState(false)
    const gameEvents = ['+1', '+2', '+3', '-1', '-2', '-3',
        'asistencija', 'skok u napadu', 'skok u odbrani', 'ukradena lopta', 'izgubljena lopta', 'izmena', 'blokada', 'izblokiran', 'obriši']
    useEffect(() => {
        dispatch(startGame(gameID))
        dispatch(getFirstTeam(firstID))
        dispatch(getSecondTeam(secondID))
    }, [])
    const BenchClicked = (playerName, index) => {

        if (onCourt.length < 5) {
            setOnCourt(prevState => [...prevState, playerName])
            setDisable(index)
        } else {
            console.log("vise od 5 igraca", index)
        }
    }
    const CourtClicked = (playerName, index) => {
        setOpen(true)
        setDisable(index)
    }
    const EventClicked = (event, index) => {
        setOpen(false)
        setDisable(index)
        console.log("EVENT:", event)
        if (event === '+1') {
            setFtScore(ftScore + 1)
        }
        if (event === '+2') {
            setFtScore(ftScore + 2)
        }
        if (event === '+3') {
            setFtScore(ftScore + 3)
        }
    }
    const StBenchClicked = (playerName, index) => {

        if (stOnCourt.length < 5) {
            setStOnCourt(prevState => [...prevState, playerName])
            setDisable(index)
        } else {
            console.log("vise od 5 igraca", index)
        }
    }
    const StCourtClicked = (playerName, index) => {
        setStOpen(true)
        setDisable(index)
    }
    const StEventClicked = (event, index) => {
        setStOpen(false)
        setDisable(index)
        console.log("EVENT:", event)
        if (event === '+1') {
            setFtScore(ftScore + 1)
        }
        if (event === '+2') {
            setFtScore(ftScore + 2)
        }
        if (event === '+3') {
            setFtScore(ftScore + 3)
        }
    }
    return (
        <div style={{ marginTop: '90px' }}>
            <Grid container
                justify="center"
                spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card style={{ marginBottom: '10px' }}>
                        <CardContent>
                            <Typography variant="h5" align="center"><span style={{ marginRight: '50px' }}>{ftScore}</span>{currentGame?.firstTeam} : {currentGame?.secondTeam}<span style={{ marginLeft: '50px' }}>{stScore}</span></Typography>
                            <Divider />
                            {console.log("CURRENT GAME", currentGame)}
                            <Typography variant="subtitle1" align="left" style={{ marginTop: '20px' }}>lokacija: <b>{currentGame?.gameLocation}</b></Typography>
                            <Typography variant="subtitle1" align="left">vreme početka: <b>{new Date().toLocaleString()}</b></Typography>
                            <Typography variant="subtitle1" align="left">statistiku unosi admin:<b>{user?.handle}</b></Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
            <Grid container
                justify="center" style={{ marginTop: '30px', marginBottom: '30px' }}>
                {!isStarted && <Button variant="contained" align="center" onClick={() => {
                    if (onCourt.length < 5) {
                        console.log("Niste odabrali 5 igraca ")
                        return
                    } else {
                        setIsStarted(true)
                    }

                }}>Startuj utakmicu</Button>}
            </Grid>

            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h5">Ime ekipe:   {game.firstTeam}</Typography>
                    {!isStarted && (<>
                        <Typography variant="h6">Odaberite prvu petorku: </Typography>
                        <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={2}
                            style={{ marginBottom: '30px', marginTop: '30px' }}>
                            {
                                firstTeam.map((player, index) => (
                                    <Grid item xs={12} sm={4}>
                                        <Card key={index} style={{ backgroundColor: '#e2e2e2', texAlign: 'center' }}>
                                            <CardContent>
                                                <Button disabled={disable === index} onClick={() => BenchClicked(player?.name, index)}>
                                                    <Typography variant="h6" align="left" style={{ color: '#30a688' }}>1{index}. {player?.name}</Typography>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }

                        </Grid></>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h5">Ime ekipe:   {game.secondTeam}</Typography>
                    {!isStarted && (<>
                        <Typography variant="h6">Odaberite prvu petorku: </Typography>
                        <Grid container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={2}
                            style={{ marginBottom: '30px', marginTop: '30px' }}>
                            {
                                secondTeam.map((player, index) => (
                                    <Grid item xs={12} sm={4}>
                                        <Card key={index} style={{ backgroundColor: '#e2e2e2', texAlign: 'center' }}>
                                            <CardContent>
                                                <Button disabled={disable === index} onClick={() => StBenchClicked(player?.name, index)}>
                                                    <Typography variant="h6" align="left" style={{ color: '#30a688' }}>1{index}. {player?.name}</Typography>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            }

                        </Grid></>
                    )}
                </Grid>
            </Grid>
            <Typography variant="h5">IGRAČI NA TERENU</Typography>
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}>
                <Grid item xs={6}>

                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={2}
                        style={{ marginBottom: '300px', marginTop: '30px', border: '1px solid' }}>
                        {
                            onCourt.map((player, index) => (
                                <Grid item xs={12} sm={4}>
                                    <Card key={index} color="textSecondary">

                                        <CardContent>
                                            <Button onClick={() => CourtClicked(player?.name)}>
                                                <Typography variant="h6" align="left">14. {player}</Typography>
                                            </Button>
                                        </CardContent>
                                    </Card>

                                </Grid>
                            ))
                        }

                        {open && (
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={2}>
                                {
                                    gameEvents.map((event, index) => (
                                        <Grid item xs={12} sm={4}>
                                            <Card key={index}>
                                                <CardActions style={{ justifyContent: 'center', minHeight: '60px' }}>
                                                    <Button onClick={() => EventClicked(event, index)} align="center">
                                                        <Typography variant="h6" color="secondary" align="center">{event}</Typography>
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )}
                    </Grid>

                </Grid>
                <Grid item xs={6}>
                    <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        spacing={2}
                        style={{ marginBottom: '300px', marginTop: '30px', border: '1px solid' }}>
                        {
                            stOnCourt.map((player, index) => (
                                <Grid item xs={12} sm={4}>
                                    <Card key={index} color="textSecondary">
                                        <CardContent>
                                            <Button onClick={() => StCourtClicked(player?.name)}>
                                                <Typography variant="h6" align="left">14. {player}</Typography>
                                            </Button>
                                        </CardContent>
                                    </Card>

                                </Grid>
                            ))
                        }

                        {stOpen && (
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={2}>
                                {
                                    gameEvents.map((event, index) => (
                                        <Grid item xs={12} sm={4}>
                                            <Card key={index}>
                                                <CardActions style={{ justifyContent: 'center', minHeight: '60px' }}>
                                                    <Button onClick={() => StEventClicked(event, index)} align="center">
                                                        <Typography variant="h6" color="secondary" align="center">{event}</Typography>
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}
export default PlayGame;