import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import SearchedPlane from "./SearchedPlane";

export default function Nav() {
  const dispatch = useDispatch();
  const [inputTxt, setinputTxt] = useState("");
  const [showSearched, setshowSearched] = useState(false);
  const onChagneHandler = (e) => {
    setinputTxt(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(inputTxt));
    setinputTxt("");
    setshowSearched(!showSearched);
  };
  return (
    <Wrapper>
      {showSearched && (
        <SearchedPlane
          showSearched={showSearched}
          setshowSearched={setshowSearched}
        />
      )}
      <div className="logo_ctr">
        Games L<p>oo</p>kup
      </div>
      <form className="search_ctr" onSubmit={onSubmitHandler}>
        <input
          placeholder="search"
          value={inputTxt}
          onChange={onChagneHandler}
        />
        <button type="submit">lookup</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  .logo_ctr {
    display: flex;
    user-select: none;
  }
  .search_ctr {
    margin-top: 1rem;
    height: 2rem;
    display: flex;
    overflow: hidden;
    border-radius: 4px;
  }
  .search_ctr input,
  .search_ctr button {
    height: 100%;
    border-radius: 0;
    border: none;
    outline: none;
    padding: 0 0.5rem;
  }
  .search_ctr button {
    cursor: pointer;
    background-color: #dddddd;
    :hover{
      background-color: #cccccc;
    }
  }
  p {
    font-weight: 700;
    color: #f50057;
  }
`;
