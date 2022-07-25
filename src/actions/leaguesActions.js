import { CONSTANTS } from '../actions';
import axios from 'axios';
export const getLeagues = () => async (dispatch) => {
    dispatch({
        type: CONSTANTS.REQUEST_LEAGUES,
    })
    axios.get('https://europe-west1-basketball-stats-719f8.cloudfunctions.net/api/leagues')
        .then((res) => {
            console.log("USER RESPONSE LEAGUES: ", res.data)
            dispatch({
                type: CONSTANTS.LEAGUES_SUCCESS,
                payload: res.data
            })
        }).catch((error) => {
            console.error(error)
            dispatch({
                type: CONSTANTS.GET_LEAGUES_ERROR,
                payload: error?.message || 'leagues error',
            })
        })
}

// export const createBoard = (name) => async (dispatch, getState) => {
//     const { boards } = getState().boardsData
//     try {
//         const response = await axios.post(`https://api.trello.com/1/boards/?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d&name=${name}`)
//         dispatch({
//             type: CONSTANTS.BOARDS_SUCCESS,
//             payload: [...boards, response.data]
//         })
//     } catch (error) {
//         dispatch({
//             type: CONSTANTS.CREATE_BOARD_ERROR,
//             payload: error?.message || 'create board error',
//         })
//     }
// }

// export const deleteBoard = (boardID) => async (dispatch, getState) => {
//     const { boards } = getState().boardsData
//     try {
//         await axios.delete(`https://api.trello.com/1/boards/${boardID}?key=3678cd613fe248e529d52ed488d8afc2&token=1b8c2e1451ccbac7aa565c0db3d019103a99186f147f8ddfcc9b422da807e98d`)
//         dispatch({
//             type: CONSTANTS.DELETE_BOARD,
//             payload: boards?.filter((board) => board.id !== boardID)
//         })
//     } catch (error) {
//         dispatch({
//             type: CONSTANTS.DELETE_BOARD_ERROR,
//             payload: error?.message || 'error while deleting a board',
//         })
//     }
// }
