import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px auto 0 auto',
        textAlign: 'center'
    },
    name: {
        padding: '20px'
    },
    card: {
        maxWidth: '400px',
        margin: '10px',
        alignContent: 'center',
        borderRadius: '20px'
    },
    content: {
        padding: '15px',
        textDecoration: 'none'
    },
    technology: {
        color: '#4aedc4'
    },
    description: {
        marginTop: '2px',
        textAlign: 'center'
    },
    website: {
        marginTop: '2px',
        textAlign: 'left'
    },
    github: {
        marginTop: '2px',
        textAlign: 'left'
    },
    status: {
        marginTop: '2px',
        textAlign: 'left'
    },
    source: {
        padding: '10px',
    }
}));