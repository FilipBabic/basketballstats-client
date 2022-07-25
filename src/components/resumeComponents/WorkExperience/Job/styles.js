import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    card: {
        width: 'auto',
        margin: '5px',
        alignContent: 'center',
        borderRadius: '20px',
        height: '220px'
    },
    content: {
        padding: '15px',
        textDecoration: 'none'
    },
    company: {
        paddingTop: '10px'
    },
    companyDescription: {
        paddingBottom: '15px'
    },
    position: {
        color: '#15996b'
    },
    description: {
        textAlign: 'center'
    }
}));