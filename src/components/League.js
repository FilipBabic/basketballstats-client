import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid,
        Card,
        CardContent,
        CardActionArea,
        CardActions,
        CardMedia,
        Button,
        Typography
} from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import logoImage from '../images/icon.png'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '80px auto 0 auto'
    },
    title:{
      padding: '20px'
    },
    card:{
        maxWidth: 400,
        margin: '10px auto 10px auto',
    },
    content: {
        padding: '25px',
        textDecoration: 'none'
    },
    media: {
        height: 140
    },
    createdAt:{
        color: 'green'
    },
    bio: {
        padding: '20px',
    }
  }));

const League = ({league: {leagueName, userHandle, createdAt}}) => {
    const classes = useStyles();
    dayjs.extend(relativeTime);
    return(
        <Grid item className={classes.root} sm={2} xs={6}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={logoImage}
                title="Contemplative Reptile"
                />
                <CardContent className={classes.content} component={Link} to={`/users/${userHandle}`}>
                <Typography variant="h5" color="primary" className={classes.title}>
                {leagueName}
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.bio}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                <Typography variant="subtitle1" className={classes.createdAt} component={'span'} align="right">
                    created by <Typography variant="h4" color="primary">
                    {userHandle}
                    </Typography> {dayjs(createdAt).fromNow()}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>  
        </Grid>
    )
}

export default League;