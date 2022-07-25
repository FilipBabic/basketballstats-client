import { CONSTANTS } from '../actions';
import axios from 'axios';
export const startGame = (gameID) => async (dispatch, getState) => {
    dispatch({
        type: CONSTANTS.REQUEST_START_GAME,
    })
    try {
        const response = await axios.get(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/getgame/${gameID}`, {
            headers: {
                'Authorization': `${localStorage.FBidToken}`
            }
        })
        console.log("START GAME:", response.data)
        dispatch({
            type: CONSTANTS.START_GAME_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.START_GAME_ERROR,
            payload: error?.message || 'get a game error',
        })
    }
}

export const getFirstTeam = (teamID) => async (dispatch, getState) => {
    dispatch({
        type: CONSTANTS.REQUEST_FIRST_TEAM,
    })
    try {
        const response = await axios.get(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/gameplayers/${teamID}`, {
            headers: {
                'Authorization': `${localStorage.FBidToken}`
            }
        })
        console.log("START GAME:", response.data)
        dispatch({
            type: CONSTANTS.FIRST_TEAM_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.FIRST_TEAM_ERROR,
            payload: error?.message || 'get a game error',
        })
    }
}
export const getSecondTeam = (teamID) => async (dispatch, getState) => {
    dispatch({
        type: CONSTANTS.REQUEST_SECOND_TEAM,
    })
    try {
        const response = await axios.get(`https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/gameplayers/${teamID}`, {
            headers: {
                'Authorization': `${localStorage.FBidToken}`
            }
        })
        console.log("START GAME:", response.data)
        dispatch({
            type: CONSTANTS.SECOND_TEAM_SUCCESS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.SECOND_TEAM_ERROR,
            payload: error?.message || 'get a game error',
        })
    }
}