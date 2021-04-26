import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { New, Popular, Upcoming } from "../components/Games";
import { loadGames } from "../actions/gamesAction";
//MATERIAL-UI
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    width: "100%",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //   FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <h1>Games Lookup</h1>
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
    </div>
  );
}
