import React from "react";
import { Tooltip } from "@material-ui/core";
function VideosCareerComponent() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
          gap: "8px",
        }}
        className="mt-5"
      >
        {[
          "item1",
          "item3",
          "item1",
          "item3",
          "item1",
          "item3",
          "item1",
          "item3",
          "item1",
          "item3",
          "item1",
          "item3",
          "item1",
          "item3",
        ].map((ele,index) => {
          return (
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=9TlHvipP5yA&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=7"
              rel="noreferrer"
              key={index}
            >
              <Tooltip title={"Vedio name here"} arrow={true}>
                <div className="h-48 border hover:shadow-md flex flex-col  p-1">
                  <div className="flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1625481474472-79e347310ffd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                      className="h-36"
                      alt='vedio'
                    />
                  </div>
                  <div className="text-center h-10  text-sm overflow-hidden overflow-ellipsis ">
                    Videos
                  </div>
                </div>
              </Tooltip>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default VideosCareerComponent;
