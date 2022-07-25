import { ContactMail, LinkedIn, LocationCity } from '@material-ui/icons';
import {
    Grid,
    Avatar,
    Typography,
    Link
} from '@material-ui/core';
import profilePhoto from '../../../images/resumeImages/profile.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';
const ContactInfo = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid container>
                <Grid item sm={1}></Grid>
                <Grid item xs={6} sm={2}><ContactMail className={classes.top} /><Typography variant="subtitle2" >filip1986babic@gmail.com</Typography></Grid>
                <Grid item xs={6} sm={2}><Link href="https://www.linkedin.com/in/filipbabic" color="textPrimary" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}><LinkedIn className={classes.top} /><Typography variant="subtitle2" >linkedin.com/in/filipbabic</Typography></Link></Grid>
                <Grid item xs={6} sm={2}><Link href="https://github.com/FilipBabic" color="textPrimary" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}><GitHubIcon className={classes.top} /><Typography variant="subtitle2" >github.com/FilipBabic</Typography></Link></Grid>
                <Grid item xs={6} sm={2}><LocationCity className={classes.top} /><Typography variant="subtitle2" >Belgrade, Serbia</Typography></Grid>
                <Grid item xs={12} sm={2}><Avatar variant="square" src={profilePhoto} alt="Filip Babic" className={classes.image} /></Grid>
                <Grid item sm={1}></Grid>
            </Grid>
        </Grid>

    )
}

export default ContactInfo
