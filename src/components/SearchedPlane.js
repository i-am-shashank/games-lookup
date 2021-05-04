import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GiCrossedSabres } from "react-icons/gi";
import { useSelector } from "react-redux";
import GameCard from "./GameCard";

export default function SearchedPlane({ showSearched, setshowSearched }) {
  const searched_games = useSelector((state) => state.games.searched);
  const onClickHandler = () => {
    setshowSearched(!showSearched);
  };
  console.log(searched_games);
  return (
    <Wrapper className="test">
      <GiCrossedSabres className="crossIco" onClick={onClickHandler} />
      {searched_games.map((obj) => (
        <GameCard
          secondary
          name={obj.name}
          img={obj.background_image}
          released={obj.released}
          id={obj.id}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  .crossIco {
    position: fixed;
    right: 8px;
    top: 8px;
    cursor: pointer;
    :active {
      color: white;
    }
  }
  position: fixed;
  z-index: 999;
  height: 90vh;
  width: 90vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: #2a2a2a;
  border: 4px solid #222222;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
`;
