import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import clickToOpen from "../../images/click_to_open.png";
import closeButton from "../../images/close.png";

const AboutMe = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const handleShowAboutMe = () => {
    setShowAboutMe(true);
  };
  const handleCloseAboutMe = () => {
    setShowAboutMe(false);
  };
  return (
    <div className="flex items-center justify-center">
      {!showAboutMe ? (
        <Button
          type="submit"
          className="text-white text-2xl w-3/4"
          onClick={handleShowAboutMe}
        >
          <img
            src={clickToOpen}
            alt="click to open button"
            className="w-1/2 h-3/4 ml-16 md:w-3/4 md:ml-10"
          />
        </Button>
      ) : ( 
        <div className="relative w-full h-1/2 md:w-1/2 md:mb-2 m-2 w-full">
          <div className="absolute top-0 right-0 mt-4 ">
            <Button className="" onClick={handleCloseAboutMe}>
              <img src={closeButton} alt="closeButton" className="w-7 h-7" />
            </Button>
          </div>
          <p className="divPara border border-2 border-white text-white md:p-8 p-4 shadow-lg bg-black md:bg-opacity-50 bg-opacity-75">
            Hello! I'm Akansha, a passionate Frontend Web Developer and tech
            enthusiast. I am specialized in converting innovative UI designs into
            functional, beautiful, and user-friendly web applications. I thrive
            on challenges and love staying up-to-date with the latest industry
            trends and technologies. Whether I'm working on a dynamic web app or
            refining the details of a responsive design, I aim to deliver
            seamless user experiences that leave a lasting impression. I'm
            dedicated to continuous learning and growth, and I'm excited to
            bring my creativity and expertise to every project I undertake.
            Let's build something amazing together!
          </p>
          
        </div>
      )}
    </div>
  );
};

export default AboutMe;
