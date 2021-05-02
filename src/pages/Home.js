import React, { useEffect, useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch } from "react-redux";
import { New, Popular, Upcoming } from "../components/Games";
import { loadGames } from "../actions/gamesAction";
//MATERIAL-UI
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Nav from "../components/Nav";
import { transform } from "framer-motion";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  // MATERIAL UI
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // FETCH GAMES
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadGames());
  // }, [dispatch]);

  // ARROW LOGIC
  const [showArrow, setshowArrow] = useState(false);
  window.onscroll = () => {
    setshowArrow(true);
  };
  const arrowStyles = {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    fontSize: "3.2rem",
    zIndex: "9",
    cursor: "pointer",
  };
  const onUpArrow = (event) => {
    event.target.style.transform = "scale(102%)";
    setTimeout(() => {
      event.target.style.transform = "scale(100%)";
    }, 200);
    window.scrollBy({ left: 0, top: -window.scrollY, behavior: "smooth" });
  };

  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={(page)=> dispatch(loadGames(page))}
        hasMore={true}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <Nav />
        {showArrow && (
          <HiArrowCircleUp onClick={onUpArrow} style={arrowStyles} />
        )}
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
          >
            <Tab label="New Games" {...a11yProps(0)} />
            <Tab label="Popular Games" {...a11yProps(1)} />
            <Tab label="Upcoming Games" {...a11yProps(2)} />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
          <New />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Popular />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Upcoming />
        </TabPanel>
      </InfiniteScroll>
    </div>
  );
}
