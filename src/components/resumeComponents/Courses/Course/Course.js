import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    Link,
    Typography
} from '@material-ui/core';
import useStyles from './styles';

const Course = ({ course: { name, period, source, description } }) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root} xs={12} xl={12} sm={4} md={3}>
            <Card className={classes.card}>
                <CardActions>
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

export default Course