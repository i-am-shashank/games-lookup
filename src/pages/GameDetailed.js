import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetailed = () => {
  const obj = useSelector((state) => state.selected);
  console.log(obj);
  //Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(obj.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  //GET PLATFORM IMAGES
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <Wrapper>
      <Stats>
        <div className="rating">
          <motion.h3 className="name">{obj.name}</motion.h3>
          <p>Rating: {obj.rating}</p>
          {getStars()}
        </div>
        <Info>
          <h3>Platforms:</h3>
          {obj.platforms && (
            <Platforms>
              {obj.platforms.map((data) => (
                <img
                  alt={data.platform.name}
                  key={data.platform.id}
                  src={getPlatform(data.platform.name)}
                ></img>
              ))}
            </Platforms>
          )}
        </Info>
      </Stats>
      <Media>
        <motion.img className="mainImg" src={obj.background_image} alt="" />
      </Media>
      <div className="screenshots">
        <p>screenshots:</p>
        {obj.short_screenshots.map((obj) => (
          <img src={obj.image} alt="" />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: max-content;
  font-family: "Quicksand", sans-serif;
  .screenshots{
    width: 90vw;
    display: flex;
    flex-direction: column;
  }
  .screenshots p{
    font-size: 1.5rem;
    font-weight: 500;
  }
  .screenshots img{
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 90vw;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  .name{
    font-size: 2rem;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 1.2rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  .mainImg{
    width: 100%;
    border-radius: 4px;
  }
`;
export default GameDetailed;
