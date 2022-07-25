import { combineReducers } from "redux";
import userReducer from './userReducer';
import leaguesReducer from './leaguesReducer';
import gamesReducer from "./gamesReducer";
import startGameReducer from './startGameReducer';
export default combineReducers({
    user: userReducer,
    leagues: leaguesReducer,
    games: gamesReducer,
    startGame: startGameReducer,
});