import { CONSTANTS } from '../actions';
import axios from 'axios';
export const getUser = () => async (dispatch) => {
    dispatch({
        type: CONSTANTS.REQUEST_USER,
    })
    let token = localStorage.FBidToken
    if (!token) {
        return ""
    }
    axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/user', {
        headers: {
            'Authorization': `${localStorage.FBidToken}`
        }
    }).then((res) => {
        let user = res.data.credentials.handle.charAt(0).toUpperCase() + res.data.credentials.handle.slice(1)
        console.log("USER RESPONSE: ", res.data, user)
        dispatch({
            type: CONSTANTS.USER_SUCCESS,
            payload: res.data
        })
    }).catch((error) => {
        console.error(error)
        dispatch({
            type: CONSTANTS.GET_USER_ERROR,
            payload: error?.message || 'user error',
        })
    })
}

export const createBoard = (name) => async (dispatch, getState) => {
    const { boards } = getState().boardsData
    try {
        const response = await axios.post(`https://api.trello.com/1/boards/?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d&name=${name}`)
        dispatch({
            type: CONSTANTS.BOARDS_SUCCESS,
            payload: [...boards, response.data]
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.CREATE_BOARD_ERROR,
            payload: error?.message || 'create board error',
        })
    }
}

export const deleteBoard = (boardID) => async (dispatch, getState) => {
    const { boards } = getState().boardsData
    try {
        await axios.delete(`https://api.trello.com/1/boards/${boardID}?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d`)
        dispatch({
            type: CONSTANTS.DELETE_BOARD,
            payload: boards?.filter((board) => board.id !== boardID)
        })
    } catch (error) {
        dispatch({
            type: CONSTANTS.DELETE_BOARD_ERROR,
            payload: error?.message || 'error while deleting a board',
        })
    }
}