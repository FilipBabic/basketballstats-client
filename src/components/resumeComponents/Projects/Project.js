import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
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
        marginTop: '2px',
        textAlign: 'left'
    },
    website:{
        marginTop: '2px',
        textAlign: 'left'
    },
    github:{
        marginTop: '2px',
        textAlign: 'left'
    },
    status:{
        marginTop: '2px',
        textAlign: 'left'
    },
    source: {
        padding: '10px',
    }
  }));

const Project = ({project: {name, development, website, status, github, description, technologies }}) => {
    const classes = useStyles();
    const clicked = () => {
        window.scrollTo(0, 450)
        var myWindow = window
        console.log(myWindow.screenX)
    }
    return (
        <Grid item className={classes.root} xs={12} xl={12} sm={4} md={3}>
        <Card className={classes.card}>
        <CardActionArea>
            <CardActions>
                <CardContent className={classes.content}>
                <Typography variant="h5" color="primary" className={classes.name}>
                    {name}
                </Typography>
                <Typography variant="subtitle2">technologies:</Typography>
                <Link component={RouterLink} onClick={clicked} to="/skills">
                    <Typography variant="subtitle1" className={classes.technology} component={'span'}>
                        {`${technologies}`}
                    </Typography>
                </Link>
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.description}>
                    {description}
                </Typography>
                <Typography variant="body2" color="primary" className={classes.website}>
                    <Link href={website}>{website ? `website: ${website}` : ""}</Link>
                </Typography>
                <Typography variant="body2" className={classes.github}>
                    <Link href={github} color="textPrimary">{github ? `GITHUB: ${github}` : ""}</Link>
                </Typography>
                <Typography variant="body2" color="secondary" className={classes.status}>
                    project status: {status}
                </Typography>    
                </CardContent>
            </CardActions>
                <Typography variant="subtitle2" color="primary" className={classes.source}>
                    {development}
                </Typography>                
            </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Project