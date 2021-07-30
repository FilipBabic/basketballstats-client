import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        marginTop: '10px',
        backgroundColor: 'rgba(235, 235, 235)'
    },
    list: {
        backgroundColor: 'rgba(235, 235, 235)'
    },
    image: {
        height: '240px',
        width: '240px',
        alignContent: 'center',
        margin: '10px auto 0 auto',
    }
}));