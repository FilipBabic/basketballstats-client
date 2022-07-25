import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core/';
import { Facebook, Instagram } from '@material-ui/icons';
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        width: '100%',
        minHeight: '70px',
        color: 'white',
        backgroundColor: 'black'
    },
    bottom: {
        flexGrow: 1,
        width: '100%',
        height: '100px',
        color: 'black',
        backgroundColor: 'silver'
    },
    icon: {
        marginBottom: '12px',
        backgroundColor: '#59b89a',
        color: 'white'
    },
    text: {
        marginBottom: '25px',
        marginRight: '8px'
    }
}));
const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container
            justify="center"
            alignItems="flex-end"
            className={classes.root}>
            <Grid item className={classes.text}>
                ZAPRATITE NAS:
            </Grid>
            <Grid item >
                <IconButton
                    className={classes.icon}
                    onClick={() => window.open("https://www.facebook.com/Cargo-Liga-107108921746568", "_blank")}>
                    <Facebook size="large" />
                </IconButton>
            </Grid>
            <Grid item >
                <IconButton
                    className={classes.icon}
                    onClick={() => window.open("https://www.instagram.com/cargo_liga", "_blank")}>
                    <Instagram size="large" />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Footer;