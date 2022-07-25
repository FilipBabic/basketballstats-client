import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../actions';
import ArrangeGame from '../components/basketballComponents/ArrangeGame/ArrangeGame';
import NextGames from '../components/basketballComponents/NextGames/NextGames';
const Dashboard = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.credentials);
    const likes = useSelector(state => state.user.likes);
    const loading = useSelector(state => state.user.loading);
    // const nextGames = useSelector(state => state.games.nextGames)
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    return (
        <div>
            {loading ? <Typography variant="h6" style={{ marginTop: '150px' }}>Učitavanje</Typography> : <Typography variant="h6" style={{ margin: '80px 0 0 20px' }}>Ulogovani korisnik: {user?.handle}</Typography>}
            <ArrangeGame />
            <NextGames isAdmin={true} />
            <div>{console.log("CREDENTIALS", user?.handle?.charAt(0).toUpperCase() + user?.handle?.slice(1), likes, loading)}</div>
        </div >)
}

export default Dashboard;