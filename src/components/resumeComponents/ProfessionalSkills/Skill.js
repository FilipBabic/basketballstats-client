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
    description:{
        textAlign: 'left'
    },
    source: {
        padding: '20px',
    }
  }));

const Skill = ({skill: {name, technology, level, source, image, description, relatedProjects }}) => {
    const classes = useStyles();
    const clicked = () => {
        window.scrollTo(0, 2020)
    }
    const preventDefault = (event) => event.preventDefault();
    return (
        <Grid item className={classes.root} xs={12} xl={12} sm={4} md={3}>
        <Card className={classes.card}>
        <CardMedia
                className={classes.media}
                image={image}
                title={name}/>
            <CardActions component={RouterLink} to={`${source}`} onClick={preventDefault} >           
                <CardContent className={classes.content}>
                <Typography variant="h5" color="primary" className={classes.name}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" className={classes.technology} component={'span'} align="right">
                    {technology}
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.description}>
                    {description}
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                    Skill level: {level}
                </Typography> 
                <Link component={RouterLink} onClick={clicked} to="/projects">
                <Typography variant="subtitle2" color="textPrimary">
                   Related Projects: {`${relatedProjects}`}
                </Typography> 
                </Link>
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

export default Skill