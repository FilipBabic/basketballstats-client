import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        marginTop: '10px',
        backgroundColor: 'rgba(235, 235, 235)'
    },
    top: {
        marginTop: '20px',
    },
    image: {
        height: '80px',
        width: '80px',
        margin: '10px auto 10px auto',
        alignContent: 'center',
        borderRadius: '15px'
    }
}));