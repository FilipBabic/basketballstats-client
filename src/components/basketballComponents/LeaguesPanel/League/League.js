import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
    Grid,
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
import updateLocale from 'dayjs/plugin/updateLocale';
import logoImage from '../../../../images/icon.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '80px auto 0 auto'
    },
    title: {
        padding: '20px'
    },
    card: {
        maxWidth: 350,
        margin: '10px auto 10px auto',
    },
    content: {
        padding: '25px',
        textDecoration: 'none'
    },
    media: {
        height: 140,
        width: 140,
        margin: '0 auto 0 auto'
    },
    createdAt: {
        color: '#4aedc4',
        textAlign: 'right',
        paddingRight: '30px'
    },
    bio: {
        padding: '20px',
    },
    leftButton: {
        marginLeft: '0',
    },
    rightButton: {
        marginLeft: '40%',
        textAlign: 'center'
    }
}));

const League = ({ league: { leagueName, userHandle, createdAt } }) => {
    const classes = useStyles();
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
    };
    const onLeave = () => {
        setHover(false);
    };
    let leagueID = leagueName.split(' ').join('').toLowerCase();
    dayjs.extend(updateLocale)
    dayjs.updateLocale('en', {
        relativeTime: {
            future: "za %s",
            past: " pre %s",
            s: 'par sekundi',
            m: "minut",
            mm: "%d minuta",
            h: "sat vremena",
            hh: "%d sati",
            d: "jednog dana",
            dd: "%d dana",
            M: "mesec",
            MM: "%d meseci",
            y: "godinu dana",
            yy: "%d godine"
        }
    })
    dayjs.extend(relativeTime);
    return (
        <Grid item className={classes.root} xs={12} sm={4}>
            <Card className={classes.card}>
                <CardActionArea component={Link} to={`/leagues/${leagueID}`}>

                    <CardContent className={classes.content}>
                        <Typography variant="h5" color="primary" className={classes.title}>
                            {leagueName}
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image={logoImage}
                            title={leagueName}
                        />
                        <Typography gutterBottom variant="body2" color="textSecondary" className={classes.bio}>
                            Amaterska Liga iz Beograda
                        </Typography>
                        <Typography variant="subtitle1" className={classes.createdAt}>
                            napravio <div><Typography variant="h4" color="primary">
                                {userHandle}
                            </Typography>
                            </div> {dayjs(createdAt).fromNow()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        onMouseEnter={onHover}
                        onMouseLeave={onLeave}
                        className={classes.rightButton}>
                        <FavoriteIcon size="large" />
                        {hover ? (<Typography variant="caption">
                            Trenutno ne možete lajkovati ligu
                        </Typography>) : ""}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default League;