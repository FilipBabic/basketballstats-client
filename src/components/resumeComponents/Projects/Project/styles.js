import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '0 auto 20px auto',
        textAlign: 'center'
    },
    name: {
        padding: '20px'
    },
    card: {
        margin: '10px',
        height: '100%',
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
        marginTop: '12px',
        textAlign: 'left'
    },
    website: {
        marginTop: '12px',
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
        backgroundColor: '#f1f1f1',
        marginTop: '12px',
        padding: '10px',
    }
}));