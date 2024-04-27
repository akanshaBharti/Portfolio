import React from "react";
import skillsBgMain from "../../images/skills_bgMain.png";
import skillsBg from "../../images/skills_bg.png";
import earth from "../../images/earth.png";
import skillsMinion from "../../images/skills_minion.png";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import TechStacks from "./TechStacks";

const Skills = () => {
  return (
    <div
    className="relative bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: `url(${skillsBg})` }}
    >
        <div
        className="absolute bg-center h-screen w-full"
        style={{ backgroundImage: `url(${earth})`, top: 0 }}
        >
            <div className="relative z-20 flex flex-col items-center justify-center gap-6 pt-6">
            <div className="absolute top-0 left-0 ml-4">
            <Sidebar />
          </div>
          <h1 className="text-4xl font-bold text-white text-center shadow-lg">
            <span
              className="text-purple-600"
              style={{
                textShadow:
                  "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
              }}
            >
              MY SKILLS
            </span>
          </h1>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-3xl text-center shadow-lg">
              <span
                className="text-white"
                style={{
                  textShadow:
                    "-1px -1px 0 #9333ea, 1px -1px 0 #9333ea, -1px 1px 0 #9333ea, 1px 1px 0 #9333ea",
                }}
              >
                HERE IS THE LIST OF SOME OF MY SKILLS
              </span>
            </p>
          </div>
          <div >
            <TechStacks/>
          </div>
        </div>
        <div className="absolute top-0 right-0 mr-4 mt-2 ">
          <Button>
            <Navbar />
          </Button>
        </div>
        </div>
        <img className="absolute pb-32" src={skillsMinion} alt="homeMinion" />

    </div>
  );
};

export default Skills;
