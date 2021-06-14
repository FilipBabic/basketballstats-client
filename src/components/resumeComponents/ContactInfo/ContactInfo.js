import { ContactMail, PhoneAndroid, LinkedIn, LocationCity, Web } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Grid,
    Avatar
} from '@material-ui/core';
import noPhoto from '../../../images/no_photo.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      marginTop: '10px',
      backgroundColor: 'rgba(235, 235, 235)'
    },
    list: {
        backgroundColor: 'rgba(235, 235, 235)'
    },
    image:{
        height: '240px',
        width: '240px',
        alignContent: 'center',
        margin: '10px auto 0 auto',
    }
}));
const ContactInfo = () => {
    const classes = useStyles();
    return(
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
                    <ListItem button component="a" href="https://www.linkedin.com/in/filipbabic">
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
                    <ListItem button component="a" href="https://www.linkedin.com/in/filipbabic">
                    <ListItemIcon>
                        <Web />
                    </ListItemIcon>
                    <ListItemText primary="www.basketballstats.rs/filipcv" />
                    </ListItem>
                </List>
        </Grid>
        <Grid item xs={12} sm={4}><Avatar src={noPhoto} alt="Filip Babic" className={classes.image}/></Grid>
        </Grid>
    )
}

export default ContactInfo
