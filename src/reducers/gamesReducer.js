import { CONSTANTS } from "../actions";
const initialState = {
    nextGames: [],
    loading: false
};
const GamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_NEXT_GAMES:
            return {
                loading: true,
                nextGames: []
            }
        case CONSTANTS.NEXT_GAMES_SUCCESS:
            return {
                loading: false,
                nextGames: action.payload,
            }
        case CONSTANTS.ARRANGE_GAME:
            return {
                loading: false,
                nextGames: action.payload
            }
        case CONSTANTS.ARRANGE_GAME_ERROR:
            return {
                loading: false,
                errors: action.payload
            }
        default:
            return state;
    }
}
export default GamesReducer;
