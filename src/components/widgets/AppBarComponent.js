import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import PanToolRoundedIcon from "@material-ui/icons/PanToolRounded";
import { Link } from "react-router-dom";

// import DrawerWidget from './DrawerWidget';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

const useDrawerStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

function AppBarComponent() {
  const classes = useStyles();
  const drawerClasses = useDrawerStyles();

  const [isOpened, setIsOpened] = useState(false);
  const onTapMenu = () => {
    setIsOpened(true);
  };
  const list = () => (
    <div
      className={clsx(drawerClasses.list)}
      onClick={() => setIsOpened(false)}
      onKeyDown={() => setIsOpened(false)}
    >
      <div className="w-full h-28 bg-custom-black flex items-center justify-center">
        <p className="text-lg font-semibold  text-white">Career Resource Hub</p>
      </div>
      <Link to="/contribute">
        <div className="w-full py-6 px-2 flex flex-row items-center hover:bg-gray-100 cursor-pointer">
          <div>
            <FolderOpenRoundedIcon />
          </div>
          <div className="flex-1 ml-2">Contribute</div>
        </div>
      </Link>

      <Link to="/request">
        <div className="w-full py-6 px-2 flex flex-row items-center hover:bg-gray-100 cursor-pointer">
          <div>
            <PanToolRoundedIcon />
          </div>
          <div className="flex-1 ml-2">Request</div>
        </div>
      </Link>

      <div className="w-full h-px bg-gray-200"></div>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        style={{ backgroundColor: "white" }}
        position="fixed"
      >
        <Toolbar>
          <React.Fragment>
            <IconButton onClick={onTapMenu} style={{ color: "#3e4853" }}>
              <MenuIcon />
            </IconButton>
            <Drawer open={isOpened} onClose={() => setIsOpened(false)}>
              {list()}
            </Drawer>
          </React.Fragment>

          <Typography
            style={{ color: "#3e4853" }}
            className={classes.title}
            variant="h6"
          >
            Career Resource{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarComponent;

// <div className={classes.root}>
//   <AppBar position="static">
//     <Toolbar variant="dense">
//       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <Typography variant="h6" color="inherit">
//         Photos
//       </Typography>
//     </Toolbar>
//   </AppBar>
// </div>

//   <div class="p-1 top-0 overflow-hidden fixed w-full ">
//   <nav class="flex justify-between items-center ">
//     <div className="pl-3">
//       <p className="text-custom-black text-xl">Career Resource</p>
//     </div>
//     <div>
//       <IconButton color="#3e4853">
//         <TuneRounded />
//       </IconButton>
//       <IconButton color="#3e4853">
//         <SearchRounded />
//       </IconButton>
//     </div>
//   </nav>
// </div>
