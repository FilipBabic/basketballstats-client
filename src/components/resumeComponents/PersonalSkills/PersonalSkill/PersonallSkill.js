import {
    Grid,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';
import useStyles from './styles';
const PersonalSkill = ({ personalSkill: { name } }) => {
    const classes = useStyles();
    return (
        <Grid item className={classes.root} xs={12} xl={12} sm={4} md={3}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant="h5" color="primary" className={classes.name}>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PersonalSkill;