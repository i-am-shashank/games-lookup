import React from "react";
import { useSelector } from "react-redux";
import GameCard, { Wrapper } from "../components/GameCard";

function New() {
  const games = useSelector((state) => state.games);
  return (
    <Wrapper>
      {games.newGames.map((obj) => {
        return (
          <GameCard
            name={obj.name}
            img={obj.background_image}
            released={obj.released}
            id={obj.id}
          />
        );
      })}
    </Wrapper>
  );
}

function Popular() {
  const games = useSelector((state) => state.games);
  return (
    <Wrapper>
      {games.popular.map((obj) => {
        return (
          <GameCard
            name={obj.name}
            img={obj.background_image}
            released={obj.released}
            id={obj.id}
          />
        );
      })}
    </Wrapper>
  );
}

function Upcoming() {
  const games = useSelector((state) => state.games);
  return (
    <Wrapper>
      {games.upcoming.map((obj) => {
        return (
          <GameCard
            name={obj.name}
            img={obj.background_image}
            released={obj.released}
            id={obj.id}
          />
        );
      })}
    </Wrapper>
  );
}

export { New, Popular, Upcoming };
