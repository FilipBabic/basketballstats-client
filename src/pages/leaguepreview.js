import React from 'react'
import Standings from '../components/basketballComponents/LeagueStandings/Standings';
import GamesForLeague from '../components/basketballComponents/GamesForLeague/GamesForLeague'
const LeaguePreview = () => {
    return (
        <div>
            <Standings />
            <GamesForLeague />
        </div>
    )
}

export default LeaguePreview;