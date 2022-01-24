import React from "react";
import { ArrowForwardIosRounded } from "@material-ui/icons";
import textUppercase from "../widgets/textUppercaseFunction";
import { Link } from "react-router-dom";

function ActivityComponent() {
  const colors = [
    "#f72585",
    "#b5179e",
    "#7209b7",
    "#560bad",
    "#480ca8",
    "#3a0ca3",
    "#3f37c9",
    "#4361ee",
    "#4cc9f0",
    "#4895ef",
  ];
  return (
    <div className="px-6 pt-2">
      <div className="h-14"></div>
      <div>
        <p className="text-2xl text-custom-black font-light">Test your</p>
        <p className="text-custom-black font-bold text-3xl">Skills here</p>
        <p className="text-custom-black text-sm mt-10">Popular goals</p>
        <p className="font-bold text-xl text-custom-green">
          UPSC CSE - GS IIT JEE NEET UG
        </p>
        <p className="font-bold text-xl text-custom-green">
          Bank Exams GATE & ESE
        </p>
        <p className="font-bold text-xl text-custom-green">
          UPSC CSE - Optional
        </p>
      </div>
      <div className="mt-4">
        {[
          "app developer",
          "database administrator",
          "ethical hacker",
          "software engineer",
          "web developer",
        ].map((name, index) => {
          return (
            <Link key={name} to={"/activity/"+name}>
              <div
                
                className="hover:bg-gray-100 h-20 mb-2 w-full cursor-pointer rounded-lg shadow-sm flex flex-row items-center border border-gray-100"
              >
                <div
                  className="w-3 h-full rounded-bl-lg rounded-tl-lg"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                ></div>
                <div className="flex-1">
                  <p className="pl-2 text-custom-black ">
                    {textUppercase(name)}
                  </p>
                </div>
                <div>
                  <ArrowForwardIosRounded
                    fontSize={"small"}
                    style={{ color: "#3e4853" }}
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mb-14"></div>
    </div>
  );
}

export default ActivityComponent;
