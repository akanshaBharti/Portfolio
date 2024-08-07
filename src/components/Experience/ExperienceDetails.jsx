import React, { useState } from "react";
import prevButton from "../../images/prev.png";
import nextButton from "../../images/next.png";
import { Button } from "@material-tailwind/react";

const ExperienceDetails = () => {
  const experienceDetails = [
    {
      ExperienceName: "Frontend React Developer Intern at Beyond Tax",
      ExperiencePlace: "Aiyug BeyondTax Private Limited",
      Logo: "",
      ExperienceTime: "[June 2024 - Present]",
      ExperienceDescription:
        "My work is to develop and maintain frontend code using React. Collaborate with the development team to design and implement new features. Assisting in debugging and troubleshooting issues in the codebase.",
    },
    {
      ExperienceName: "Frontend React Developer Intern at CoziQ",
      ExperiencePlace: "CoziQ Experiences - Private Dining Startup",
      Logo: "",
      ExperienceTime: "[February 2024 - April 2024]",
      ExperienceDescription:
        "My work was to develop user interface and user experience components using React. Integrate APIs to enhance functionality and user experience. Collaborate with the team to implement design and functionality improvements. Ensure the technical feasibility of UI/UX designs. ",
    },
    {
      ExperienceName: "Frontend Developer Intern at Bichhoos",
      ExperiencePlace: "Bichhoos - E-commerce website for customized items",
      Logo: "",
      ExperienceTime: "[January 2024 - April 2024]",
      ExperienceDescription:
        "My work involved UI/UX design of Bichhoos website. Integrate APIs to enhance functionality and user experience. Learned ReactJS, Tailwind CSS, Material UI, Git/GitHub.",
    },
    {
      ExperienceName: "General Secretary in College",
      ExperiencePlace:
        "Ordinateur - The Computer Science Society Of Hansraj College",
      Logo: "",
      ExperienceTime: "[October 2022 - October 2023]",
      ExperienceDescription:
        "My work was to manage and coordinate a team of 100+ members smoothly and professionally. Coordinated with Team Heads and Teacher coordinators for the smooth flow of society and its events. Lead and managed events (as 3rd in charge).",
    },
  ];

  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  

  const goToNextExperience = () => {
    setCurrentExperienceIndex((prevIndex) =>
      prevIndex === experienceDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousExperience = () => {
    setCurrentExperienceIndex((prevIndex) =>
      prevIndex === 0 ? experienceDetails.length - 1 : prevIndex - 1
    );
  };

  return ( 
    <div className="flex flex-col items-center justify-center w-full h-1/2 md:w-1/2 h-auto m-2">
      {/* <div className=""> */}
        <div className="">
          <p className="navbar text-3xl md:text-4xl text-center shadow-lg mb-8 md:pt-2">
            <span
              className="text-white"
              style={{
                textShadow:
                  "-1px -1px 0 #9333ea, 1px -1px 0 #9333ea, -1px 1px 0 #9333ea, 1px 1px 0 #9333ea",
              }}
            >
              {experienceDetails[currentExperienceIndex].ExperienceName}
            </span>
          </p>
        </div>
        
        
        <div className="divPara relative md:mt-20 mt-[2rem] ">
          <div className=" border border-2 border-white text-white p-8 shadow-lg bg-black md:bg-opacity-50 bg-opacity-75 ">
            <div className="text-xl ">
              {experienceDetails[currentExperienceIndex].ExperiencePlace}
            </div>
            <div className="text-xl">
              {experienceDetails[currentExperienceIndex].ExperienceTime}
            </div>
            <div>
              {experienceDetails[currentExperienceIndex].ExperienceDescription}
            </div>
          </div>
        </div>
      {/* </div> */}
      <div className="absolute z-20 justify-between flex w-full w-screen md:mt-4 mb-[14rem] md:mb-0">
        <Button
          type="submit"
          className="px-2 md:px-4 py-2 md:ml-20 md:w-16 w-14 md:w-auto"
          onClick={goToPreviousExperience}
          disabled={currentExperienceIndex === 0}
        >
          <img src={prevButton} alt="previousButton" />
        </Button>
        <Button
          className="px-2 md:px-4 py-2 md:mr-20 md:w-16 w-14 md:w-auto"
          onClick={goToNextExperience}
          disabled={currentExperienceIndex === experienceDetails.length - 1}
        >
          <img src={nextButton} alt="nextButton" />
        </Button>
      </div>
      
    </div>
  );
};

export default ExperienceDetails;
