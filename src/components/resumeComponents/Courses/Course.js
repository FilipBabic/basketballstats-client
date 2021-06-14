import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    CardMedia,
    Link,
    Typography
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '20px auto 0 auto',
      textAlign: 'center'
    },
    name:{
      padding: '20px'
    },
    card:{
        maxWidth: '400px',
        margin: '0 auto 0 auto',
        textAlign: 'center'
    },
    content: {
        padding: '15px',
        textDecoration: 'none'
    },
    media: {
        margin: '10px auto 10px auto',
        height: 240,
        width: 240
    },
    technology:{
        color: 'green'
    },
    source: {
        padding: '20px',
    }
  }));

const Course = ({course: {name, period, source, description }}) => {
    const classes = useStyles();
    const clicked = () => {
        window.scrollTo(0, 2020)
    }
    const preventDefault = (event) => event.preventDefault();
    return (
        <Grid item className={classes.root} xs={12} xl={12} sm={4} md={3}>
        <Card className={classes.card}>
            <CardActions component={RouterLink} to={`${source}`} onClick={preventDefault} >           
                <CardContent className={classes.content}>
                <Typography variant="h5" color="primary" className={classes.name}>
                    {name}
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary">
                    {description}
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                    {period}
                </Typography> 
                </CardContent>
            </CardActions>
            <CardActionArea>     
                <Typography variant="subtitle2" color="primary" className={classes.source}>
                    {source}
                </Typography>                     
            </CardActionArea>
            </Card>  
        </Grid>
    )
}

export default Course