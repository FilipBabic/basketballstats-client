import useStyles from './styles';
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

const Skill = ({ skill: { name, technology, level, source, image, description, relatedProjects } }) => {
    const classes = useStyles();
    const clicked = () => {
        window.scrollTo(0, 2730)
    }
    return (
        <Grid item className={classes.root} xs={12} xl={12} sm={4} md={3}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name} />
                <CardActions>
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
                    <Link href={`${source}`} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                        <Typography variant="subtitle2" color="primary" className={classes.source}>
                            {source}
                        </Typography>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Skill