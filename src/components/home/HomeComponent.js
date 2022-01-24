import React, { useState } from "react";
import AppBarComponent from "../widgets/AppBarComponent";

import NewHomeComponent from "./NewHomeComponent";
import { BottomNavigation, makeStyles } from "@material-ui/core";
import { BottomNavigationAction } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";
import SettingsIcon from "@material-ui/icons/Settings";
import ResourceComponent from "./ResourceComponent";
import ActivityComponent from "./ActivityComponent";
import AccountComponent from "./AccountComponent";
import { useAuth } from "../../context/AuthContext";
import BallotRoundedIcon from "@material-ui/icons/BallotRounded";

const useStyles = makeStyles({
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

function HomeComponent() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const { user } = useAuth();
  const changeIndex = (ind) => {
    setIndex(ind);
  };
  const pickComponent = (ind) => {
    switch (ind) {
      case 0:
        return <NewHomeComponent func={changeIndex} />;
      case 1:
        return <ResourceComponent />;
      case 2:
        return <ActivityComponent />;
      default:
        return <AccountComponent />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className=" w-full flex-none bg-red-400">
        <AppBarComponent />
      </div>
      <div className="flex-1 overflow-auto w-full">{pickComponent(index)}</div>
      <div>
        <BottomNavigation
          className={classes.stickToBottom}
          value={index}
          onChange={(event, newindex) => {
            setIndex(newindex);
          }}
          showLabels
        >
          <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction
            label="Resources"
            icon={<ImportContactsRoundedIcon />}
          />
          <BottomNavigationAction
            label="Prepare"
            icon={<BallotRoundedIcon />}
          />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
}

export default HomeComponent;
