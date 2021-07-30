import { ContactMail, PhoneAndroid, LinkedIn, LocationCity, Language } from '@material-ui/icons';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid,
    Avatar
} from '@material-ui/core';
import profilePhoto from '../../../images/resumeImages/profile.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';
const ContactInfo = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} sm={8}>
                <List className={classes.list}>
                    <ListItem>
                        <ListItemIcon>
                            <ContactMail />
                        </ListItemIcon>
                        <ListItemText primary="filip1986babic@gmail.com" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneAndroid />
                        </ListItemIcon>
                        <ListItemText primary="+381603589701" />
                    </ListItem>
                    <ListItem button component="a" href="https://www.linkedin.com/in/filipbabic" target="_blank" rel="noopener">
                        <ListItemIcon>
                            <LinkedIn />
                        </ListItemIcon>
                        <ListItemText primary="www.linkedin.com/in/filipbabic" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocationCity />
                        </ListItemIcon>
                        <ListItemText primary="Belgrade, Serbia" />
                    </ListItem>
                    <ListItem button component="a" href="https://basketball-stats-719f8.firebaseapp.com/" target="_blank" rel="noopener">
                        <ListItemIcon>
                            <Language />
                        </ListItemIcon>
                        <ListItemText primary="https://basketball-stats-719f8.firebaseapp.com/filipresume" />
                    </ListItem>
                    <ListItem button component="a" href="https://github.com/FilipBabic?tab=repositories" target="_blank" rel="noopener">
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="https://github.com/FilipBabic" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={4}><Avatar src={profilePhoto} alt="Filip Babic" className={classes.image} /></Grid>
        </Grid>
    )
}

export default ContactInfo
