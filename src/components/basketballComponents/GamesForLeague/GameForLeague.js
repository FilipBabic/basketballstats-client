import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardActionArea,
    IconButton
} from '@material-ui/core';
const GameForLeague = ({ game: { gameID, firstTeam, secondTeam, location, time, firstScore, secondScore } }) => {
    const [firstImage, setFirstImage] = useState("")
    const [secondImage, setSecondImage] = useState("")
    useEffect(() => {
        const convertFirstImage = async () => {
            try {
                const resp = await axios.get(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/convertimage/${firstTeam}`);
                setFirstImage(resp.data);
            } catch (err) {
                console.error(err);
            }
        };
        const convertSecondImage = async () => {
            try {
                const resp = await axios.get(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/convertimage/${secondTeam}`);
                setSecondImage(resp.data);
            } catch (err) {
                console.error(err);
            }
        };
        convertFirstImage()
        convertSecondImage()
    })
    return (
        <Grid item xs={12} sm={4} lg={3}>
            <Card style={{ borderRadius: '20px' }}>
                <CardActionArea component={Link} to={`/game/${gameID}`}>
                    <CardContent>
                        <Typography variant="subtitle2" color="textSecondary" align="center" style={{ marginBottom: '10px' }}>{time.toUpperCase()}</Typography>
                        <Grid container
                            justify="center"
                            spacing={2}>
                            <Grid item xs={6} style={{ backgroundColor: '#fff', textAlign: 'center' }}>
                                <IconButton component={Link} to={`/team/${firstTeam}`}>
                                    <img src={firstImage} alt="Home" style={{ width: '100px', height: '100px' }} />
                                </IconButton>
                                <Typography variant="body1" align="center"><b>{firstTeam}</b></Typography>
                                <Typography variant="h6" align="center">{firstScore}</Typography>
                            </Grid>
                            <Grid item xs={6} style={{ backgroundColor: '#fff', textAlign: 'center' }}>
                                <IconButton component={Link} to={`/team/${secondTeam}`}>
                                    <img src={secondImage} alt="Home" style={{ width: '100px', height: '100px' }} />
                                </IconButton>
                                <Typography variant="body1" align="center"><b>{secondTeam}</b></Typography>
                                <Typography variant="h6" align="center">{secondScore}</Typography>
                            </Grid>
                            <Typography variant="subtitle2" color="primary">{location}</Typography>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid >
    )
}
export default GameForLeague;