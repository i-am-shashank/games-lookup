import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function GameCard({ name, img, released, id }) {
  return (
    <Card key={id}>
      <img alt="error loading img data" src={img} />
      <p className="name">
        {name.length <= 32 ? name : name.substring(0, 32) + "..."}
      </p>
      <p className="released">released: {released}</p>
    </Card>
  );
}
export const Wrapper = styled(motion.div)`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Card = styled(motion.div)`
  img {
    height: 16rem;
    width: 100%;
    margin-bottom: 8px;
  }
  font-family: "Quicksand", sans-serif;
  flex-grow: 1;
  align-self: flex-start;
  background-color: #111111;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: max-content;
  max-width: 24rem;
  padding: 0.8rem;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: all ease 0.2s;
  .name {
    font-size: 2rem;
    font-weight: 500;
  }
  .released {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
  :hover {
    transform: scale(102%);
  }
`;
