import React, { useState, useEffect } from "react";
import useWindowDimensions from "../widgets/useWindowDimension";

function NewHomeComponent({ func }) {
  const { width } = useWindowDimensions();
  const [homeImage, setHomeImage] = useState("");
  useEffect(() => {
    if (width < 600) {
      setHomeImage(
        "https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fhome-mobile.png?alt=media&token=6c7c84b9-37db-488b-9c36-7d53a0b1c6ca"
      );
    } else {
      setHomeImage(
        "https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fhome-desktop.png?alt=media&token=d2aa6fcc-d086-48c4-970d-d966658ad9d8"
      );
    }
  },[width]);

  return (
    <div>
      <div className="relative">
        {/* <Image src={'https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fhome-mobile.png?alt=media&token=6c7c84b9-37db-488b-9c36-7d53a0b1c6ca'} height="600" width="400"/> */}
        <img src={homeImage} className="h-full w-screen" alt="home.jpg" />

        <div className="w-full h-full absolute top-0 left-0 flex items-center flex-col justify-center">
          <div className="flex justify-center flex-col items-center">
            {/* <p className="text-custom-black text-3xl">.</p> */}

            <p className="text-custom-black text-3xl">Explore.</p>
            <p className="text-custom-black text-3xl">Create.</p>
            <p className="text-custom-black text-3xl">Collaborate.</p>
          </div>
          <div>
            <p className="text-sm mt-3 px-5  text-custom-green">
              Career Resource hub is a public digital library of open
              educational resources. Explore, Create, and Collaborate with
              educators around the world to improve curriculam.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-custom-bluegrey p-6">
        <div className={width > 800 ? "flex w-full justify-center" : ""}>
          <div
            className={
              width < 800
                ? "flex flex-col"
                : "flex flex-row w-3/5 justify-center items-center "
            }
          >
            <div className="relative shadow-sm">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fresources.png?alt=media&token=f58fcafb-8303-494a-acef-a863829df676"
                className="w-screen h-2/4 rounded-sm bg-cover"
                alt="home"
              />
              <div className="absolute w-full h-full top-0 left-0 p-6">
                <p className="text-2xl text-custom-black font-light">
                  Find all
                </p>
                <p className="text-custom-black font-bold text-3xl">
                  Resources here
                </p>
                <p className="text-custom-black text-sm mt-5">Popular goals</p>
                <p className="font-bold text-large text-custom-green">
                  UPSC CSE - GS IIT JEE NEET UG
                </p>
                <p className="font-bold text-large text-custom-green">
                  Bank Exams GATE & ESE
                </p>
                <p className="font-bold text-large text-custom-green">
                  UPSC CSE - Optional
                </p>
                <button
                  onClick={() => func(1)}
                  className="bg-custom-blue px-10 py-4 rounded-sm text-white mt-5 hover:bg-white hover:text-custom-blue hover:border"
                >
                  Start Learnnig
                </button>
              </div>
            </div>
            {width > 800 ? <p>&nbsp;&nbsp;&nbsp;</p> : null}
            <div
              className={
                width < 800 ? "relative shadow-sm mt-5 " : "relative shadow-sm "
              }
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fquiz.png?alt=media&token=b125e062-9476-4fe4-84b1-eb03db356f4c"
                className="w-screen h-2/4 rounded-sm"
                alt="home"
              />
              <div className="absolute w-full h-full top-0 left-0 p-6">
                <p className="text-2xl text-custom-black font-light">
                  Test your
                </p>
                <p className="text-custom-black font-bold text-3xl">
                  Skills here
                </p>
                <p className="text-custom-black text-sm mt-5">Popular goals</p>
                <p className="font-bold text-large text-custom-green">
                  UPSC CSE - GS IIT JEE NEET UG
                </p>
                <p className="font-bold text-large text-custom-green">
                  Bank Exams GATE & ESE
                </p>
                <p className="font-bold text-large text-custom-green">
                  UPSC CSE - Optional
                </p>
                <button
                  onClick={() => func(2)}
                  className="bg-custom-green px-10 py-4 rounded-sm text-white mt-5 hover:bg-white hover:text-custom-green hover:border"
                >
                  Start Learnnig
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={width > 800 ? "w-full flex justify-center " : ""}>
          <div
            className={
              width > 800
                ? "flex w-3/5 justify-center items-start mt-5"
                : "mt-5 flex justify-between items-start"
            }
          >
            <div className=" w-1/2 mr-4">
              {/* left side */}
              <div className="relative ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fstream.png?alt=media&token=534461ff-d45e-4dfa-bc9e-b82b558c0637"
                  className="h-24 w-full rounded-sm"
                  alt="home"
                />
                <div className="absolute w-full h-full top-0 left-0 p-3">
                  <p className="text-xs text-custom-black">Streams</p>
                  <p className="mt-2 font-bold text-2xl">
                    2<span className="text-custom-green ml-1">+</span>
                  </p>
                </div>
              </div>
              <div className="relative mt-5 ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fbranch.png?alt=media&token=320d459c-699c-489c-82f7-d11bec2f1334"
                  className="h-24 w-full rounded-sm"
                  alt="home"
                />
                <div className="absolute w-full h-full top-0 left-0 p-3">
                  <p className="text-xs text-custom-black">Branches</p>
                  <p className="mt-2 font-bold text-2xl">
                    19<span className="text-custom-green ml-1">+</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 mt-12">
              {/* right side */}
              <div className="relative ">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fcareer.png?alt=media&token=02130d38-5c3d-4ce3-ad12-a9bcb9f4fca2"
                  className="h-24 w-full rounded-sm"
                  alt="home"
                />
                <div className="absolute w-full h-full top-0 left-0 p-3">
                  <p className="text-xs text-custom-black">Careers</p>
                  <p className="mt-2 font-bold text-2xl">
                    80<span className="text-custom-green ml-1">+</span>
                  </p>
                </div>
              </div>
              <div className="relative mt-5">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/career-resource-hub.appspot.com/o/icons%2Fresources.png?alt=media&token=f58fcafb-8303-494a-acef-a863829df676"
                  className="h-24 w-full rounded-sm"
                  alt="home"
                />
                <div className="absolute w-full h-full top-0 left-0 p-3">
                  <p className="text-xs text-custom-black">Resources</p>
                  <p className="mt-2 font-bold text-2xl">
                    100<span className="text-custom-green ml-1">+</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full justify-center">
          <div className={width>800?" w-3/5":""}>
            <img
              src={
                "https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              }
              className=" w-full"
              alt="home"
            />
            <div className="p-4 bg-yellow-400">
              <p className="text-2xl text-white font-bold">BUILD. SAVE</p>
              <p className="text-2xl text-white font-bold">COLLABORATE.</p>
              <p className="text-custom-black text-sm mt-5">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
              <button className="bg-yellow-400 border px-10 py-4 rounded-md text-white mt-5 hover:bg-white hover:text-yellow-500 ">
                Groups
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className={width>800?" w-3/5":""}>
            <img
              src={
                "https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              }
              className=" w-full"
              alt="home"
            />
            <div className="p-4 bg-custom-blue">
              <p className="text-2xl text-white font-bold">BUILD. SAVE</p>
              <p className="text-2xl text-white font-bold">COLLABORATE.</p>
              <p className="text-custom-black text-sm mt-5">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
              <button className="bg-custom-blue border px-10 py-4 rounded-md text-white mt-5 hover:bg-white hover:text-custom-blue ">
                Groups
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className={width>800?" w-3/5":""}>
            <img
              src={
                "https://images.unsplash.com/flagged/photo-1569144654912-5f146d08b98b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              }
              alt="home"
              className=" w-full"
            />
            <div className="p-4 bg-custom-green">
              <p className="text-2xl text-white font-bold">BUILD. SAVE</p>
              <p className="text-2xl text-white font-bold">COLLABORATE.</p>
              <p className="text-custom-black text-sm mt-5">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
              <button className="bg-custom-green border px-10 py-4 rounded-md text-white mt-5 hover:bg-white hover:text-custom-green ">
                Groups
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-14"></div>
    </div>
  );
}

export default NewHomeComponent;
