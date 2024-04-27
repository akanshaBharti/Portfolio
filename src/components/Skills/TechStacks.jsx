import React from "react";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import tailwind from "../../images/tailwind.png";
import python from "../../images/python.png";
import git from "../../images/git.png";
import react from "../../images/react.png";
import mysql from "../../images/mysql.png";
import cpp from "../../images/cpp.png";
import materialUI from "../../images/materialUI.png";

const TechStacks = () => {
  return (
    <div className="grid grid-cols-4 gap-6 text-white mt-16">
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={html} alt="htmlIcon" className="w-10 h-12 mr-2"/>
        HTML
      </div>
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={css} alt="cssIcon" className="w-10 h-12 mr-2"/>
        CSS
      </div>
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={js} alt="jsIcon" className="w-10 h-12 mr-2"/>
        JavaScript
      </div>
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={react} alt="reactIcon" className="w-10 h-12 mr-2"/>
        ReactJS
      </div>
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={tailwind} alt="tailwindIcon" className="w-10 h-12 mr-2"/>
        Tailwind CSS
      </div>
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={materialUI} alt="materialUIIcon" className="w-10 h-12 mr-2"/>
        Material UI
      </div>
      {/* <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={html} alt="htmlIcon" className="w-10 h-12 mr-2"/>
        Django
      </div> */}
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={mysql} alt="mysqlIcon" className="w-10 h-12 mr-2"/>
        MySQL
      </div>
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={cpp} alt="cppIcon" className="w-10 h-12 mr-2"/>
        C++
      </div>
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={python} alt="pythonIcon" className="w-10 h-12 mr-2"/>
        Python
      </div>
      <div className="flex flex-row items-center border border-white w-full h-full text-3xl p-3 bg-black bg-opacity-50">
        <img src={git} alt="gitIcon" className="w-10 h-12 mr-2"/>
        Git/GitHub
      </div>
    </div>
  );
};

export default TechStacks;
