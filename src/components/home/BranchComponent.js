import React, { useState, useEffect } from "react";
import MyCircularProgress from "../widgets/MyCircularProgress";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { AppBar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import textUppercase from "../widgets/textUppercaseFunction";
import { useParams } from "react-router";
import useWindowDimensions from "../widgets/useWindowDimension";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

function BranchComponent() {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const { stream } = useParams();
  const { branchMap, careerMap } = useData();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (branchMap !== null) {
      setLoading(false);
    }
  }, branchMap);

  return loading ? (
    <div className="flex h-screen w-screen items-center justify-center">
      <MyCircularProgress />
    </div>
  ) : branchMap[stream] == null ? (
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
              {textUppercase(stream)}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className="h-14"></div>
      <div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            className="h-72 bg-contain w-screen"
            alt="stream"
          />
          <div className="absolute top-0 left-0 flex items-center justify-center flex-col w-full h-full px-5">
            <p className="text-white font-semibold text-xl">
              Find all {stream} courses and careers below. Enjoy your study
            </p>
          </div>
        </div>

        <div>
        {branchMap[stream].map((val, index) => {
          return (
            <div key={val} className=" p-5 ">
              <div className="  w-full  px-5 pt-10 pb-6 border">
                <p className="text-2xl text-custom-black font-semibold">
                  {textUppercase(val)}
                </p>
                <div className="w-full h-px bg-gray-200 my-6"></div>
                <div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:width>470? "repeat(auto-fit,minmax(400px,1fr))":"repeat(auto-fit,minmax(200px,1fr))",
                      gap: "8px",
                    }}
                  >
                    {careerMap[val].map((car, ind) => {
                      return (
                        <p
                          key={car}
                          className="text-custom-pink w-full  font-semibold  hover:underline"
                          // style={{wordWrap:"break-word"}}
                        >
                          <Link
                            to={"/stream/" + stream + "/" + val + "/" + car}
                          >
                            {textUppercase(car)}
                          </Link>
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default BranchComponent;
