import { CONSTANTS } from "../actions";
const initialState = {
    credentials: {},
    likes: [],
    loading: false
};
const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_USER:
            return {
                loading: true,
                credentials: {},
                likes: []
            }
        case CONSTANTS.USER_SUCCESS:
            return {
                loading: false,
                likes: action.payload.likes,
                credentials: action.payload.credentials
            }
        default:
            return state;
    }
}
export default UserReducer;
