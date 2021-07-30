import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px auto 0 auto',
        textAlign: 'center'
    },
    name: {
        padding: '20px',
        color: '#002884'
    },
    card: {
        maxWidth: '400px',
        margin: '10px',
        textAlign: 'center',
        borderRadius: '20px'
    },
    content: {
        padding: '15px',
        textDecoration: 'none'
    },
    media: {
        margin: '10px auto 10px auto',
        height: 240,
        width: 240
    },
    technology: {
        color: '#4aedc4'
    },
    source: {
        padding: '20px',
    }
}));