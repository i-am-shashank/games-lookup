import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";

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
