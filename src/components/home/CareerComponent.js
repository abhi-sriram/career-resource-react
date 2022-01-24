import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AboutCareerComponent from "./Career/AboutCareerComponent";
import BooksCareerComponent from "./Career/BooksCareerComponent";
import VideosCareerComponent from "./Career/VideosCareerComponent";
import CoursesCareerComponent from "./Career/CoursesCareerComponent";
import ArticleCareerComponent from "./Career/ArticleCareerComponent";
import textUppercase from "../widgets/textUppercaseFunction";
import { useParams } from "react-router";
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";
import MyCircularProgress from "../widgets/MyCircularProgress";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const tabStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
}));

function CareerComponent() {
  const classes = useStyles();
  const tabClasses = tabStyles();
  const { streamList, branchMap, careerMap } = useData();
  const { stream, branch, career } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (streamList !== null) {
      const b = branchMap[stream];
      if (b !== null && b.includes(branch)) {
        const c = careerMap[branch];
        if (c !== null && c.includes(career)) {
          setLoading(false);
        } else {
          setError("No Data Found");
        }
      } else {
        setError("No Data Found");
      }
    } else {
      // call data fetching again
    }
  }, [streamList]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return loading ? (
    <div className="flex h-screen w-screen items-center justify-center">
      <MyCircularProgress />
    </div>
  ) : error !== null ? (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <p>Sorry, no data availabe</p>
      <Link path="/">Home</Link>
    </div>
  ) : (
    <div>
      <div className={classes.root}>
        <AppBar
          elevation={0}
          style={{ backgroundColor: "white" }}
          position="fixed"
        >
          <Toolbar>
            <Typography
              style={{ color: "#3e4853" }}
              className={classes.title}
              variant="h6"
            >
              {textUppercase(career)}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="h-14"></div>
      <div className={tabClasses.root}>
        <AppBar
          style={{ backgroundColor: "white" }}
          position="static"
          color="default"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab style={{ color: "#3e4853" }} label="About" {...a11yProps(0)} />
            <Tab style={{ color: "#3e4853" }} label="Books" {...a11yProps(1)} />
            <Tab
              style={{ color: "#3e4853" }}
              label="Videos"
              {...a11yProps(2)}
            />
            <Tab
              style={{ color: "#3e4853" }}
              label="Courses"
              {...a11yProps(3)}
            />
            <Tab
              style={{ color: "#3e4853" }}
              label="Articles"
              {...a11yProps(4)}
            />
          </Tabs>
        </AppBar>
        <TabPanel style={{ margin: "0" }} value={value} index={0}>
          <AboutCareerComponent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BooksCareerComponent />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VideosCareerComponent />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CoursesCareerComponent />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ArticleCareerComponent />
        </TabPanel>
      </div>
    </div>
  );
}

export default CareerComponent;
