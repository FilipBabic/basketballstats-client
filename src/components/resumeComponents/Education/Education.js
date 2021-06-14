import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea, Link } from '@material-ui/core';
import Singidunum from '../../../images/resumeImages/Singidunum.png';
import CetvrtaGimnazija from '../../../images/resumeImages/cetvrta_gimnazija.png';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px auto 0 auto',
        textAlign: 'center',
        textDecoration: 'none'
    },
    image: {
        margin: '10px auto 10px auto',
        height: '150px',
        width: '350px',
    },
    imageSecond: {
        margin: '10px auto 10px auto',
        height: '150px',
        width: '150px',
    },
    green: {
        color: 'green'
    }
  }));
const Education = () => {
    const classes = useStyles();
    return(
        <Grid container>
        <Grid item sm={12}>
        <Card className={classes.root}>
        <Link href="http://fir.singidunum.ac.rs/" target="_blank" rel="noopener">
        <CardActionArea>
        <CardMedia  component="img" className={classes.image} image={Singidunum} title="Singidunum" />
            <CardContent className={classes.card}>
            <Typography variant="subtitle2" color="textSecondary">
                Graduated at 2012 with Bacheelor deegree of
            </Typography>
            <Typography variant="h4" color="primary">
                University Singidunum
            </Typography>
            <Typography variant="h6" className={classes.green}>
                Faculty of informatics and computing, Belgrade
            </Typography>
            <Typography variant="subtitle1" color="secondary">
                Department of programming and design.
            </Typography>
            </CardContent>
            </CardActionArea>
            </Link>
        </Card>
        </Grid>
        <Grid item sm={12}>
        <Card className={classes.root}>
        <Link href="https://cetvrtagimnazija.edu.rs/" target="_blank" rel="noopener">
        <CardActionArea>
        <CardMedia  component="img" className={classes.imageSecond} image={CetvrtaGimnazija} title="Singidunum" />
            <CardContent className={classes.card}>
            <Typography variant="subtitle2" color="textSecondary">
                Graduated at 2005
            </Typography>
            <Typography variant="h4" color="primary">
                Fourth Highschool in Belgrade
            </Typography>
            <Typography variant="subtitle1" color="secondary">
                Department of Mathematics
            </Typography>
            </CardContent>
            </CardActionArea>
            </Link>
        </Card>
        </Grid>
        </Grid>
    )
}

export default Education