import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea, Link } from '@material-ui/core';
import Singidunum from '../../../images/resumeImages/Singidunum.png';
import CetvrtaGimnazija from '../../../images/resumeImages/cetvrta_gimnazija.png';
import useStyles from './styles';
const Education = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item sm={1} />
            <Grid item sm={5}>
                <Card className={classes.card}>
                    <Link href="http://fir.singidunum.ac.rs/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                        <CardActionArea>
                            <CardMedia component="img" className={classes.image} image={Singidunum} title="Singidunum" />
                            <CardContent className={classes.card}>
                                <Typography variant="subtitle2" color="textSecondary">
                                    Graduated at 2012 with Bacheelor deegree of
                                </Typography>
                                <Typography variant="h4" color="secondary">
                                    University Singidunum
                                </Typography>
                                <Typography variant="h6">
                                    Faculty of informatics and computing, Belgrade
                                </Typography>
                                <Typography variant="subtitle1" className={classes.direction}>
                                    Department of programming and design.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </Grid>
            <Grid item sm={5}>
                <Card className={classes.card}>
                    <Link href="https://cetvrtagimnazija.edu.rs/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                        <CardActionArea>
                            <CardMedia component="img" className={classes.imageSecond} image={CetvrtaGimnazija} title="Singidunum" />
                            <CardContent className={classes.card}>
                                <Typography variant="subtitle2" color="textSecondary">
                                    Graduated at 2005
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    Fourth Highschool in Belgrade
                                </Typography>
                                <Typography variant="subtitle1" className={classes.direction}>
                                    Department of Mathematics
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>
            </Grid>
            <Grid item sm={1} />
        </Grid>
    )
}

export default Education