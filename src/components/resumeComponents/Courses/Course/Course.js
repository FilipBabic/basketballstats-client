import {
    Grid,
    Card,
    CardContent,
    CardActionArea,
    Link,
    Typography
} from '@material-ui/core';
import useStyles from './styles';

const Course = ({ course: { name, period, source, description } }) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root} xs={12} sm={2}>
            <Card className={classes.card}>
                <CardActionArea>
                    <Link href={`${source}`} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                        <CardContent className={classes.content}>
                            <Typography variant="subtitle1" color="primary" className={classes.name}>
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textPrimary">
                                {description}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary" className={classes.period}>
                                {period}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Course