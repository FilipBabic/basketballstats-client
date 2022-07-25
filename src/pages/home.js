import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, getLeagues } from '../actions';
import { AuthContext } from '../context/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import NextGames from '../components/basketballComponents/NextGames/NextGames';
import { Grid, Typography, Avatar } from '@material-ui/core';
import League from '../components/basketballComponents/LeaguesPanel/League/League';
import HeaderImage from '../images/header-image.jpg'
import Footer from '../components/Footer';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white',
        margin: '58px auto 0 auto',
        minHeight: '300px',
        width: '100%'
    },
    nextGames: {
        backgroundColor: '#f1f1f1',
        margin: '30px 20px 30px 20px',
        padding: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
    },
    title: {
        padding: '10px',
    },
    white: {
        color: 'white',
    },
    home: {
        marginTop: '-240px',
        textAlign: 'center',
        color: '#59b89a'
    },
    home2: {
        marginTop: '0px',
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '100%',
        color: '#59b89a',
        backgroundColor: 'black'
    },
    winner: {
        marginTop: '-43%',
        marginLeft: '60%',
        backgroundColor: 'green',
        color: 'white',
        border: '3px solid black',
        padding: '10px',
    },
    cargo: {
        color: '#59b89a',
    },
    image: {
        width: '100%'
    }
}));
const Home = () => {
    const classes = useStyles();
    const [isAuthenticated, setAuthenticated] = useContext(AuthContext);
    let token = localStorage.FBidToken;
    if (!token) {
        setAuthenticated(false);
    } else {
        setAuthenticated(true);
    }
    const dispatch = useDispatch()
    // const userName = useSelector(state => state.user.credentials?.handle);
    // const likes = useSelector(state => state.user.likes);
    // const loading = useSelector(state => state.user.loading);
    const leagues = useSelector(state => state.leagues.leagues);
    useEffect(() => {
        dispatch(getUser())
        dispatch(getLeagues())
    }, [dispatch])
    return (
        <Grid container
            justify="center"
            alignItems="center"
            className={classes.root}>
            <img src="https://cargoliga.rs/wp-content/uploads/2021/11/11.jpg" height="240" width="100%" alt="test" />
            <Typography variant="h5" className={classes.home}>
                <img src="https://cargoliga.rs/wp-content/uploads/2021/09/cargo-liga-logo.webp" align="center" height="140" width="140" alt="Logo" />< br />
                <span className={classes.cargo}>Car:Go </span><span className={classes.white}>amaterska košarkaška liga</span>
            </Typography>
            <Grid container
                justify="center"
                alignItems="center"
                spacing={1}
                className={classes.nextGames}>
                <Typography variant="h5" className={classes.title}>Naredni mečevi:</Typography>
                <NextGames />
            </Grid>
            <Typography variant="h5" align="center" className={classes.home2}>
                Car:Go <span className={classes.white}>je jedinstvena košarkaška liga . Ona je ujedno i najbolje organizovan i najveći sportski amaterski projekat u našoj zemlji.</span>
            </Typography>
            <img src="https://cargoliga.rs/wp-content/uploads/2021/10/cargo-kosarkaska-liga-002.webp" width="100%" alt="srednja slika" />
            <Typography variant="h5" align="center" className={classes.home2}>
                <span className={classes.white}>Svaku utakmicu prati komentator, fotograf i 2 statističara, a obezbeđen je i prenos uživo na youtube kanalu </span>Car:go lige.
            </Typography>
            <Grid container
                justify="center"
                alignItems="center"
                spacing={1}
                className={classes.nextGames}>
                <Grid container justify="center">
                    <Typography variant="h5" className={classes.title}>Izaberite ligu:</Typography>
                </Grid>
                {
                    leagues.map((league) => <League league={league} key={league.leagueID} />)
                }

            </Grid>
            <Typography variant="h5" align="center" className={classes.home2}>
                Car:Go <span className={classes.white}>košarkaška liga se sastoji od 6 divizija, sa po 10 ekipa i više od 500 igrača!!!
                    Od pobednika divizija i kupa, formira se  plejof, a sve ekipe se bore za pehar pobednika Car:go lige</span>
            </Typography>
            <img src={HeaderImage} className={classes.image} alt="test" />
            <Typography variant="h5" align="center" className={classes.winner}>
                2020-21<br />
                <Avatar style={{ height: '50px', width: '50px', backgroundColor: 'black', color: 'gold', margin: '0 auto 0 auto' }}>
                    <EmojiEventsIcon size="large" />
                </Avatar>
                WINNER<br />

                SHUFFLE
            </Typography>
            <Typography variant="h6" align="center" className={classes.home2}>
                Za najbolje pojedince sezone obezbeđene su nagrade i to u kategorijama:<br />
                <span className={classes.white}>
                    1. NAJKORISNIJI IGRAC LIGE <br />
                    2. NAJBOLJI POENTER LIGE <br />
                    3. NAJBOLJI TROJKAS LIGE <br />
                    4. NAJBOLJI SKAKAC LIGE <br />
                    5. NAJBOLJI BLOKER LIGE <br />
                    6. NAJBOLJI ASISTENT LIGE <br />
                </span>
            </Typography>
            <Footer />
        </Grid >
    )
}

export default Home;