import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import League from './League/League';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 auto 0 auto',
    minHeight: '200px',
    width: '100%'
  },
  leagues: {
    padding: '10px'
  }
}));

const LeaguesPanel = () => {
  const [leagues, setLeagues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/leagues');
      console.log(resp.data);
      setLeagues(resp.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    sendGetRequest()
  }, []);
  let leagueMarkup = isLoading ? <Typography variant="h5" style={{ margin: '150px auto 0 auto' }}>Loading</Typography> :
    <>
      {
        leagues.map((league) => <League league={league} key={league.leagueID} />)
      }
    </>

  return (
    <Grid container className={classes.root}>
      {
        leagueMarkup
      }
    </Grid>
  )
}

export default LeaguesPanel;