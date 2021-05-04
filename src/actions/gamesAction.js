import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGamesURL,
} from "../api";

//ACTION CREATOR

export const loadGames = (page) => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL(page));
  const newGamesData = await axios.get(newGamesURL(page));
  const upcomingData = await axios.get(upcomingGamesURL(page));
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchedGames = await axios.get(searchGamesURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedGames.data.results,
    },
  });
};
