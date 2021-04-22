import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

export default function Home() {
  //   FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
