import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import League from './League';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '0 auto 0 auto',
      minHeight: '200px',
      width: '100%'
    },
    leagues:{
      padding: '10px'
    }
  }));

const LeaguesPanel = () => {
    const [leagues, setLeagues] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();
    // const fetch2 =async()=>{
    //   let res = []
    //   db.collection("leagues").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         // console.log(doc.id, " => ", doc.data());
    //         res = [...res, doc.data()];
    //     })
    //     setLeagues(res);
    //     setIsLoading(false);
    // });
    // }
    const sendGetRequest = async () => {
      try {
          const resp = await axios.get('http://localhost:5000/basketball-stats-719f8/europe-west1/api/leagues');
          console.log(resp.data);
          setLeagues(resp.data);
          setIsLoading(false);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };
    useEffect(() => {
      sendGetRequest()
    },[]);
    let leagueMarkup = isLoading ? <h3>Loading</h3> :(
      <>
      {
        leagues.map((league) => <League league={league} key={league.leagueID}/>)
      }
    </>)
    
    return (
        <Grid container className={classes.root}>        
          {
            leagueMarkup
          }          
        </Grid>
    )
}

export default LeaguesPanel;