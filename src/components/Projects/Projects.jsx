import React from "react";
import projectBgMain from "../../images/project_bgMain.png";
import projectMinion from "../../images/project_Minion.png";
import earth from "../../images/earth.png";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${projectBgMain})` }}
    >
      <div
        className="absolute bg-center h-screen w-full  justify-center"
        style={{
          backgroundImage: `url(${earth})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          top: 0,
        }}
      >
        <div className="relative z-20 flex flex-col items-center justify-center gap-8 pt-16">
          <div className="absolute top-0 left-0 ml-4 hidden md:block">
            <Sidebar />
          </div>
          <h1 className="heading text-4xl md:text-5xl font-bold text-white text-center shadow-lg">
            <span
              className="text-purple-600"
              style={{
                textShadow:
                  "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
              }}
            >
              MY PROJECTS
            </span>
          </h1>
          <div className="flex items-center justify-center">
            <ProjectDetails />
          </div>
        </div>
        <div className="absolute top-0 right-0 mr-4 mt-2 ">
          <Button>
            <Navbar />
          </Button>
        </div>
      </div>
      <img className="absolute pb-32" src={projectMinion} alt="homeMinion" />
    </div>
  );
};

export default Projects;
