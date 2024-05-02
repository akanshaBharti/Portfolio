import React from "react";
import backgroundImage1 from "../../images/home_bg2.png";
import backgroundImage2 from "../../images/earth.png";
import homeMinion from "../../images/home_minion.png";
import { Button } from "@material-tailwind/react";
import AboutMe from "../About/AboutMe";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage1})` }}
    >
      <div
        className="absolute bg-center h-screen w-full"
        style={{ backgroundImage: `url(${backgroundImage2})`, top: 0 }}
      >
        <div className="relative z-20 flex flex-col items-center justify-center gap-6 pt-6">
          <div className="absolute top-0 left-0 ml-4 hidden md:block">
            <Sidebar />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white text-center shadow-lg">
            <span
              className="text-purple-600"
              style={{
                textShadow:
                  "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
              }}
            >
              FRONTEND WEB DEVELOPER
            </span>
          </h1>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-3xl md:text-4xl font-bold text-center shadow-lg">
              <span
                className="text-purple-600"
                style={{
                  textShadow:
                    "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
                }}
              >
                I AM AKANSHA
              </span>
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 mr-4 mt-2 ">
          <Button>
            <Navbar />
          </Button>
        </div>
      </div>
      <img className="absolute pb-32" src={homeMinion} alt="homeMinion" />
      <div className="absolute flex items-center justify-center pt-56 md:pt-64">
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
