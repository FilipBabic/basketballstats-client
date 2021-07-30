import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
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
        backgroundColor: 'white',
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
                const resp = await axios.get(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/${leagueID}/standings`);
                console.log(resp.data);
                setTeams(resp.data);
                setIsLoading(false);
            } catch (err) {
                console.error(err);
            }
        };
        sendGetRequest()
    }, [leagueID]);
    let leagueMarkup = isLoading ? <h3 style={{ marginTop: '150px', textAlign: 'center' }}>Loading</h3> :
        <>
            {
                teams.map((team) =>
                    <>
                        <ListItem className={classes.list} key={team.rank}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: 'black' }}>
                                    {team.rank}
                                </Avatar>
                            </ListItemAvatar>
                            <Grid item sm={4} xs={5}>
                                <ListItemText primary={`${team.teamName}`} style={{ textAlign: 'left' }} />
                            </Grid>
                            <Grid item sm={1} xs={1}>
                                <ListItemText primary={`${team.gp}`} />
                            </Grid>
                            <Grid item sm={1} xs={1}>
                                <ListItemText primary={`${team.gw}`} />
                            </Grid>
                            <Grid item sm={1} xs={1}>
                                <ListItemText primary={`${team.points}`} />
                            </Grid>
                            <Grid item sm={1} xs={1}>
                                <ListItemText primary={`343`} />
                            </Grid>
                            <Grid item sm={1} xs={1}>
                                <ListItemText primary={`311`} />
                            </Grid>
                            <Grid item sm={1} xs={1}>
                                <ListItemText primary={`+32`} />
                            </Grid>
                            <Grid item sm={2} xs={1}>
                                <ListItemText primary={`${team.points}`} style={{ color: 'green' }} />
                            </Grid>
                        </ListItem>
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
            {leagueMarkup}
        </Grid>
    )
}

export default Standings;