import { CONSTANTS } from '../actions';
import axios from 'axios';
export const getNextGames = () => async (dispatch) => {
    dispatch({
        type: CONSTANTS.REQUEST_NEXT_GAMES,
    })
    axios.get('http://localhost:5000/basketball-stats-719f8/europe-west1/api/nextgames')
        .then((res) => {
            console.log("NEXT GAMES RESPONSE: ", res.data)
            dispatch({
                type: CONSTANTS.NEXT_GAMES_SUCCESS,
                payload: res.data
            })
        }).catch((error) => {
            console.error(error)
            dispatch({
                type: CONSTANTS.NEXT_GAMES_ERROR,
                payload: error?.message || 'next games error',
            })
        })
}
export const arrangeGame = (addGame) => async (dispatch, getState) => {
    const { nextGames } = getState().games
    try {
        const response = await axios.post(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/arrangegame`, addGame, {
            headers: {
                'Authorization': `${localStorage.FBidToken}`
            }
        })
        console.log("GAME SUCCESSFULLY ARANGED:", response.data)
        dispatch({
            type: CONSTANTS.ARRANGE_GAME,
            payload: [...nextGames, response.data]
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.ARRANGE_GAME_ERROR,
            payload: error?.message || 'error while arranging a game',
        })
    }
}
