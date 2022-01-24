import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../context/DataContext";
import textUppercase from "../widgets/textUppercaseFunction";

function ResourceComponent() {
  const { streamList,count } = useData();
  return (
    <div className="px-2 pt-2">
      <div className="h-14"></div>
      <div className="px-6 pt-2">
        {/* <p className="text-base text-custom-green font-bold">Courses</p>  */}
        <p className="text-2xl text-custom-black font-light">Find all</p>
        <p className="text-custom-black font-bold text-3xl">Resources here</p>
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
      {streamList == null ? (
        <div className="flex items-center justify-center h-60 w-full">
          <p className="text-custom-black font-bold" >No Data Found</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "8px",
          }}
          className="mt-5 mx-5"
        >
          {streamList.map((ele) => {
            return (
              <Link key={ele} to={"/stream/" + ele}>
                <div className="h-28 bg-gray-500 rounded-md shadow-md bg-gradient-to-tr from-custom-green to-green-400 px-5 py-2 cursor-pointer">
                  <div className="text-center text-sm font-semibold ">
                    {textUppercase(ele)}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-white">{count[ele].branch} Branches</p>
                    <span className="h-3 w-px bg-white"></span>
                    <p className="text-xs text-white">{count[ele].career} careers</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-white">{count[ele].resource} Resources</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      <div className="mb-14"></div>
    </div>
  );
}

export default ResourceComponent;
