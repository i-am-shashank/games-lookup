import {combineReducers} from 'redux';
import gamesReducers from './gamesReducers';

const rootReducer = combineReducers({
    games: gamesReducers,
})

export default rootReducer;