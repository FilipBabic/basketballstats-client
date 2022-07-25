import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import Info from '@material-ui/icons/Info';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        padding: '5px',
        textAlign: 'center',
        color: '#15996b'
    },
    card: {
        maxWidth: '350px',
        height: 'auto',
        margin: '0 auto 0 auto',
        borderRadius: '25px'
    },
    content: {
        marginTop: '0px',
        height: 'auto',
        textDecoration: 'none'
    },
    media: {
        height: 140,
        width: 140,
        margin: '0 auto 0 auto'
    },
    createdAt: {
        color: '#4aedc4',
        textAlign: 'center'
    },
    bio: {
        padding: '20px',
    },
    leftButton: {
        marginLeft: '0',
    },
    rightButton: {
        textAlign: 'center'
    }
}));

const League = ({ league: { leagueName, userHandle, createdAt, logoUrl } }) => {
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
            M: "mesec dana",
            MM: "%d meseca",
            y: "godinu dana",
            yy: "%d godine"
        }
    })
    dayjs.extend(relativeTime);
    return (
        <Grid item className={classes.root} xs={12} sm={4} md={3} lg={2}>
            <Card className={classes.card}>
                <CardActionArea component={Link} to={`/league/${leagueID}`}>
                    <CardContent className={classes.content}>
                        <Typography variant="h6" color="primary" className={classes.title}>
                            {leagueName}
                        </Typography>
                        <CardMedia
                            className={classes.media}
                            image={logoUrl}
                            title={leagueName}
                        />
                        <Typography gutterBottom variant="body2" align="center" color="textSecondary" className={classes.bio}>
                            Amaterska Liga iz Beograda
                        </Typography>
                        <Button
                            size="small"
                            color="primary"
                            onMouseEnter={onHover}
                            onMouseLeave={onLeave}
                            className={classes.rightButton}>
                            <Info size="large" />
                            {hover ? (<Typography variant="subtitle1" className={classes.createdAt}>
                                napravio <div><Typography variant="h4" color="primary">
                                    {userHandle}
                                </Typography>
                                </div> {dayjs(createdAt).fromNow()}
                            </Typography>) : ""}
                        </Button>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default League;