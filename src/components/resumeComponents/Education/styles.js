import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px auto 0 auto',
        maxWidth: '600px',
        borderRadius: '20px',
        textAlign: 'center',
        textDecoration: 'none'
    },
    card: {
        margin: '10px',
        textAlign: 'center'
    },
    image: {
        margin: '10px auto 10px auto',
        height: '150px',
        width: '350px',
    },
    imageSecond: {
        margin: '10px auto 10px auto',
        height: '150px',
        width: '150px',
    },
    green: {
        color: '#4aedc4'
    }
}));