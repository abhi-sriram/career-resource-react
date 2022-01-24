import React from "react";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import ExitToAppTwoToneIcon from "@material-ui/icons/ExitToAppTwoTone";
import { ArrowForwardIosRounded } from "@material-ui/icons";
import { useAuth } from "../../context/AuthContext";

function AccountComponent() {
  const { logout } = useAuth();

  const fun = () => {};

  const tileWidget = (icon, title, onClickFunction) => {
    return (
      <div
        key={title}
        className="hover:bg-gray-100 h-20 px-2 mb-2 w-full hover:cursor-pointer rounded-lg shadow-sm flex flex-row items-center border border-gray-200"
      >
        <div>{icon}</div>
        <div className="flex-1">
          <p className="pl-2 text-custom-black ">{title}</p>
        </div>
        <div>
          <ArrowForwardIosRounded
            color={"#3e4853"}
            fontSize={"small"}
            style={{ color: "#3e4853" }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 pt-2">
      <div className="h-14"></div>
      {tileWidget(
        <AccountCircleTwoToneIcon
          color={"#3e4853"}
          fontSize={"large"}
          style={{ color: "#3e4853" }}
        />,
        "Account",
        fun
      )}
      {tileWidget(
        <HelpTwoToneIcon
          color={"#3e4853"}
          fontSize={"large"}
          style={{ color: "#3e4853" }}
        />,
        "Help & Support",
        fun
      )}
      {tileWidget(
        <LockTwoToneIcon
          color={"#3e4853"}
          fontSize={"large"}
          style={{ color: "#3e4853" }}
        />,
        "Privacy Policy",
        fun
      )}
      {tileWidget(
        <DescriptionTwoToneIcon
          color={"#3e4853"}
          fontSize={"large"}
          style={{ color: "#3e4853" }}
        />,
        "Terms & Conditions",
        fun
      )}
      <div
        key='logout'
        className="hover:bg-gray-100 h-20 px-2 mb-2 w-full hover:cursor-pointer rounded-lg shadow-sm flex flex-row items-center border border-gray-200"
        onClick={()=>logout()}
      >
        <div><ExitToAppTwoToneIcon
          color={"#3e4853"}
          fontSize={"large"}
          style={{ color: "#3e4853" }}
        /></div>
        <div className="flex-1">
          <p className="pl-2 text-custom-black ">Logout</p>
        </div>
        <div>
          <ArrowForwardIosRounded
            color={"#3e4853"}
            fontSize={"small"}
            style={{ color: "#3e4853" }}
          />
        </div>
      </div>
      <div className="mb-14"></div>
    </div>
  );
}

export default AccountComponent;
