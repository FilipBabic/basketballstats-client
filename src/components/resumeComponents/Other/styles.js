import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px auto 0 auto',
        borderRadius: '20px',
        maxWidth: '600px',
        alignContent: 'center',
        textDecoration: 'none'
    },
    card: {
        margin: '10px auto 10px auto',
        textAlign: 'center',
    }
}));