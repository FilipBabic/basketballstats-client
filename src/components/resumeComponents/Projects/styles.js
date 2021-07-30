import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        backgroundColor: 'rgba(235, 235, 235)',
        shadowColor: 'rgba(255, 255, 255)'
    },
    title: {
        margin: '10px auto 10px auto',
        alignItems: 'center',
        textAlign: 'center'
    }
}));