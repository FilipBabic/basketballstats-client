import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px auto 10 auto',
        textAlign: 'center'
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
    company: {
        padding: '20px'
    },
    position: {
        color: '#4aedc4'
    },
    description: {
        textAlign: 'center'
    }
}));