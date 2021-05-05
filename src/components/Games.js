import React from "react";
import { useSelector } from "react-redux";
import GameCard, { Wrapper } from "../components/GameCard";
import { useDispatch } from "react-redux";
import { select } from "../actions/selectedAction";

function New() {
  const dispatch = useDispatch();
  const onCardClickHandler = (obj) => {
    dispatch(select(obj));
  };

  const games = useSelector((state) => state.games);
  return (
    <Wrapper>
      {games.newGames.map((obj) => {
        return (
          <GameCard
            onClick={()=> onCardClickHandler(obj)}
            slug={obj.slug}
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
  const dispatch = useDispatch();
  const onCardClickHandler = (obj) => {
    dispatch(select(obj));
  };
  const games = useSelector((state) => state.games);
  return (
    <Wrapper>
      {games.popular.map((obj) => {
        return (
          <GameCard
            onClick={(obj)=> onCardClickHandler}
            slug={obj.slug}
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
  const dispatch = useDispatch();
  const onCardClickHandler = (obj) => {
    dispatch(select(obj));
  };
  const games = useSelector((state) => state.games);
  return (
    <Wrapper>
      {games.upcoming.map((obj) => {
        return (
          <GameCard
            onClick={(obj)=> onCardClickHandler}
            slug={obj.slug}
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
