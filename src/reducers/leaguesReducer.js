import { CONSTANTS } from "../actions";
const initialState = {
    leagues: [],
    loading: false
};
const LeaguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_LEAGUES:
            return {
                loading: true,
                leagues: []
            }
        case CONSTANTS.LEAGUES_SUCCESS:
            return {
                loading: false,
                leagues: action.payload,
            }
        default:
            return state;
    }
}
export default LeaguesReducer;
