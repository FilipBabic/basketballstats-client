import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider
} from '@material-ui/core';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '80px auto 0 auto',
        minHeight: '300px',
        width: '100%'
    },
    list: {
        margin: '0 auto 0 auto',
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    title: {
        width: '100%',
        textAlign: 'center'
    }
}));
const TableHeader = () => {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem style={{ textAlign: 'center' }} key={1}>
                <ListItemAvatar>
                    <Avatar style={{ backgroundColor: 'black', color: 'gold' }}>
                        <EmojiEventsIcon />
                    </Avatar>
                </ListItemAvatar>
                <Grid item sm={4} xs={4}>
                    <ListItemText primary={``} />
                </Grid>
                <Grid item sm={1} xs={1}>
                    <ListItemText secondary={`GP`} />
                </Grid>
                <Grid item sm={1} xs={1}>
                    <ListItemText secondary={`GW`} />
                </Grid>
                <Grid item sm={1} xs={1}>
                    <ListItemText secondary={`GL`} />
                </Grid>
                <Grid item sm={2} xs={2}>
                    <ListItemText secondary={`P+/P-`} />
                </Grid>
                <Grid item sm={1} xs={1}>
                    <ListItemText secondary={`Dif`} />
                </Grid>
                <Grid item sm={2} xs={2}>
                    <ListItemText primary={`Pts`} style={{ color: 'green' }} />
                </Grid>
            </ListItem>
            <Divider style={{ color: 'green', height: '0px', border: '2px solid' }} />
        </List>
    )
}
export default TableHeader;