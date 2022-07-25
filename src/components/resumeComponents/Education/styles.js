import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        textDecoration: 'none'
    },
    card: {
        textAlign: 'center',
        borderRadius: '20px'
    },
    image: {
        margin: '10px auto 10px auto',
        height: '100px',
        width: '300px',
    },
    imageSecond: {
        margin: '10px auto 10px auto',
        height: '120px',
        width: '120px',
    },
    direction: {
        color: '#15996b'
    }
}));