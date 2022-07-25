import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        width: '100%',
    },
    name: {
        padding: '2px',
        textAlign: 'center'
    },
    card: {
        maxWidth: '400px',
        borderRadius: '20px',
    },
    content: {
        textDecoration: 'none'
    },
    media: {
        margin: '10px auto 0 auto',
        height: 80,
        width: 80
    },
    technology: {
        color: '#15996b',
        marginTop: '10%'
    }
}));