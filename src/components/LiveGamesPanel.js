import React, { useEffect } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

const LiveGamesPanel = () => {
  // const [leagues, setLeagues] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
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
  useEffect(() => {
    axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/leagues')
      .then((response) => console.log(response.data))
  }, []);
  // let leagueMarkup = isLoading ? <h3>Loading</h3> :(
  //   <>
  //   {
  //     leagues.map((league) => <League league={league}/>)
  //   }
  // </>)

  return (
    <Grid container className={classes.root}>
      {/* {
            leagueMarkup
          }           */}
      LIVE GAMES PANEL
    </Grid>
  )
}

export default LiveGamesPanel;