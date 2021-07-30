import {
    Grid,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';
import useStyles from './styles';
const Job = ({ job: { company, period, position, description } }) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root} xs={12} xl={12} sm={4} md={3}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant="h5" color="primary" className={classes.company}>
                        {company}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.position} component={'span'} align="right">
                        {position}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.description}>
                        {description}
                    </Typography>
                    <Typography variant="subtitle2" color="secondary">
                        {period}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Job