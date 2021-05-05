import { combineReducers } from "redux";
import gamesReducers from "./gamesReducers";
import selectedGameReducer from "./selectedGameReducer";

const rootReducer = combineReducers({
  games: gamesReducers,
  selected: selectedGameReducer,
});

export default rootReducer;
