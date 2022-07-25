import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    IconButton
} from '@material-ui/core';
const NextGame = ({ nextGame: { firstTeam, secondTeam, userHandle, gameTime, gameLocation, nextGameID, firstImage, secondImage, liveStream, leagueName }, isAdmin }) => {
    const [open, setOpen] = useState(false)
    const history = useHistory();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleStart = () => {
        setOpen(false);
        history.push(`/utakmica/${nextGameID}/${firstTeam}/${secondTeam}`)
    };
    return (
        <Grid item xs={12} sm={4} lg={3}>
            <Card style={{ borderRadius: '25px' }}>
                <CardContent>
                    <Typography variant="subtitle1" color="textSecondary" align="center" style={{ marginBottom: '20px' }}>{leagueName}</Typography>
                    <Grid container
                        justify="center"
                        spacing={2}>
                        <Grid item xs={6} style={{ backgroundColor: '#fff', textAlign: 'center' }}>
                            <Typography variant="body1" align="center"><b>{firstTeam.toUpperCase()}</b></Typography>
                            <IconButton component={Link} to={`/team/${firstTeam}`}>
                                <img src={firstImage} alt="Home" style={{ width: '100px', height: '100px' }} />
                            </IconButton></Grid>
                        <Grid item xs={6} style={{ backgroundColor: '#fff', textAlign: 'center' }}>
                            <Typography variant="body1" align="center"><b>{secondTeam.toUpperCase()}</b></Typography>
                            <IconButton component={Link} to={`/team/${secondTeam}`}>
                                <img src={secondImage} alt="Home" style={{ width: '100px', height: '100px' }} />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" style={{ color: '#15996b' }}>LOKACIJA:</Typography>
                            <Typography variant="subtitle2">{gameLocation}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" color="primary">VREME:</Typography>
                            <Typography variant="subtitle2">{gameTime}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" color="error">LIVE STREAM:</Typography>
                            <Typography variant="subtitle2" color="textSecondary">{liveStream}</Typography>
                        </Grid>
                    </Grid>
                </CardContent >
                {isAdmin && <CardActions>
                    <Grid container
                        direction="row"
                        justify="center"
                        spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleClickOpen}>Startuj</Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Da li ste sigurni da želite da počnete utakmicu?"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Ukoliko kliknete dugme START utakmica zvanično počinje
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="contained" color="primary" onClick={handleStart}>START</Button>
                                    <Button variant="contained" color="secondary" onClick={handleClose} autoFocus>
                                        Zatvori
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" >Obriši</Button>
                        </Grid>
                        <Typography variant="body2">utakmicu zakazao admin: <b>{userHandle}</b></Typography>
                    </Grid>
                </CardActions>}

            </Card >
        </Grid >
    )
}
export default NextGame;