import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography
} from '@material-ui/core';
import TableHeader from './TableHeader/TableHeader'
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
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        textAlign: 'center'
    },
    title: {
        width: '100%',
        textAlign: 'center'
    }
}));
const Standings = () => {
    let { leagueID } = useParams();
    const [teams, setTeams] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();

    useEffect(() => {
        const sendGetRequest = async () => {
            try {
                const resp = await axios.get(`http://localhost:5000/basketball-stats-719f8/europe-west1/api/${leagueID}/standings`);
                console.log(resp.data);
                setTeams(resp.data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        sendGetRequest()
    }, [leagueID]);

    let leagueMarkup = isLoading ? <h3 style={{ marginTop: '150px', textAlign: 'center' }}>Učitavanje</h3> :
        <>
            {
                teams.map((team) =>
                    <>{console.log("TEAM ID: ", team.rank)}
                        <Link to={`/team/${team.teamName}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem className={classes.list} key={`${team.rank}`}>
                                <ListItemAvatar>
                                    <Avatar src={`${team.image}`} alt="team logo" style={{ backgroundColor: 'black' }}>
                                    </Avatar>
                                </ListItemAvatar>
                                <Grid item sm={4} xs={4}>
                                    <ListItemText primary={`${team.teamName}`} style={{ textAlign: 'left' }} />
                                </Grid>
                                <Grid item sm={1} xs={1}>
                                    <ListItemText primary={`${team.gw + team.gl}`} />
                                </Grid>
                                <Grid item sm={1} xs={1}>
                                    <ListItemText primary={`${team.gw}`} />
                                </Grid>
                                <Grid item sm={1} xs={1}>
                                    <ListItemText primary={`${team.gl}`} />
                                </Grid>
                                <Grid item sm={2} xs={2}>
                                    <ListItemText primary={`${team.ps}/${team.pr}`} />
                                </Grid>
                                <Grid item sm={1} xs={1}>
                                    <ListItemText primary={`${team.ps - team.pr}`} />
                                </Grid>
                                <Grid item sm={2} xs={2}>
                                    <ListItemText primary={`${team.points}`} style={{ color: 'green' }} />
                                </Grid>
                            </ListItem>
                        </Link>
                    </>
                )
            }
        </>
    return (
        <Grid container className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                Tabela {leagueID}
            </Typography>
            <TableHeader />
            <List className={classes.list}>
                {leagueMarkup}
            </List>
        </Grid>
    )
}

export default Standings;