import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    homeButton: {
        margin: '0 auto 0 0'
    },
    signupButton: {
        marginLeft: '2px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        }
    },
    loginButton: {
        marginRight: '2px',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        }
    },
    title: {
        margin: '0 auto 0 auto',
        flexGrow: 1,
    },
    logo: {
        height: '40px',
        width: '40px',
    }
}));