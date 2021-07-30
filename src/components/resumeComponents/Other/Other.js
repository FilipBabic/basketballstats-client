import { Grid, Typography, Card, CardContent, CardActionArea, Link } from '@material-ui/core';
import useStyles from './styles';
const Other = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Card className={classes.root}>
                    <CardContent className={classes.card}>
                        <Typography variant="h5" color="primary">
                            Other jobs:
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            Private detective (2 years) - Anonimus<br />
                            Hotel recepcionist (1 year) - Hotel Union<br />
                            Driver (1 month) - Car&Go <br />
                            Bartender (1 year) - Green Caffe<br />
                            Casino cashier (1 year) - Casino Admiral
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.root}>
                    <Link href="https://cornliga.rs/tim/old-school/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                        <CardActionArea>
                            <CardContent className={classes.card}>
                                <Typography variant="subtitle2" color="textSecondary">
                                    One of founders and player of:
                                </Typography>
                                <Typography variant="h5" color="primary">
                                    Old School
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    Old school is a basketball amateur team founded in 2016 in Belgrade, Serbia.
                                </Typography>
                                <Typography variant="subtitle1" color="secondary">
                                    We are a group of friends and basketball enthusiasts, who compete in domestic amateur leagues
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.root}>
                    <CardContent className={classes.card}>
                        <Typography variant="h6" color="textSecondary">
                            Driving licence B category
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className={classes.root}>
                    <CardContent className={classes.card}>
                        <Typography variant="h5" color="primary">
                            Languages:
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            Serbian(srpski) domain <br />
                            English(engleski) advanced
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Other;