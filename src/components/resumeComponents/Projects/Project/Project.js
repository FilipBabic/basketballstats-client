import { Link as RouterLink } from 'react-router-dom';
import {
    Grid,
    Card,
    CardContent,
    Link,
    Typography
} from '@material-ui/core';
import useStyles from './styles';

const Project = ({ project: { name, development, website, status, github, description, technologies } }) => {
    const classes = useStyles();
    const clicked = () => {
        window.scrollTo(0, 850)
        var myWindow = window
        console.log(myWindow.screenX)
    }
    return (
        <Grid item className={classes.root} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card className={classes.card}>
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
                    <Typography variant="subtitle2" color="primary" className={classes.source}>
                        {development}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Project