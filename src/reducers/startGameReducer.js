import { CONSTANTS } from "../actions";
const initialState = {
    game: {},
    firstTeam: [],
    secondTeam: [],
    loading: false,
    error: []
};
const StartGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_START_GAME:
            return {
                ...state,
                loading: true,
                game: {}
            }
        case CONSTANTS.START_GAME_SUCCESS:
            return {
                ...state,
                loading: false,
                game: action.payload,
            }
        case CONSTANTS.REQUEST_FIRST_TEAM:
            return {
                ...state,
                loading: true,
                firstTeam: [],
            }
        case CONSTANTS.FIRST_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                firstTeam: action.payload,
            }
        case CONSTANTS.FIRST_TEAM_ERROR:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case CONSTANTS.REQUEST_SECOND_TEAM:
            return {
                ...state,
                loading: true,
                secondTeam: [],
            }
        case CONSTANTS.SECOND_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                secondTeam: action.payload,
            }
        case CONSTANTS.SECOND_TEAM_ERROR:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        default:
            return state;
    }
}
export default StartGameReducer;
