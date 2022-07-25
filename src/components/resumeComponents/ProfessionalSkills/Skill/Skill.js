import useStyles from './styles';
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@material-ui/core';

const Skill = ({ skill: { name, technology, level, source, image, description, relatedProjects } }) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root} xs={6} sm={2}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name} />
                <CardContent className={classes.content}>
                    <Typography variant="h6" color="primary" className={classes.name}>
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component={'span'} align="right">
                        {technology}
                    </Typography>
                    <Typography variant="subtitle2" className={classes.technology}>
                        Skill level: {level}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Skill