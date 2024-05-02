import React, { useState } from "react";
import prevButton from "../../images/prev.png";
import nextButton from "../../images/next.png";
import { Button } from "@material-tailwind/react";


const ExperienceDetails = () => {
  const experienceDetails = [
    {
      ExperienceName: "Frontend Developer Intern at CoziQ",
      ExperiencePlace: "CoziQ Experiences - Private Dining Startup",
      ExperienceTime: "[February 2024 - April 2024]", 
      ExperienceDescription:
        "My work was to develop user interface and user experience components using React. Integrate APIs to enhance functionality and user experience. Collaborate with the team to implement design and functionality improvements. Ensure the technical feasibility of UI/UX designs. ", 
    },
    {
      ExperienceName: "Frontend Developer Intern at Bichhoos",
      ExperiencePlace: "Bichhoos - E-commerce website for customized items",
      ExperienceTime: "[January 2024 - April 2024]", 
      ExperienceDescription:
        "My work involved UI/UX design of Bichhoos website. Integrate APIs to enhance functionality and user experience. Learned ReactJS, Tailwind CSS, Material UI, Git/GitHub.",
    },
    {
      ExperienceName: "General Secretary in College",
      ExperiencePlace: "Ordinateur - The Computer Science Society Of Hansraj College",
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
    <div className="flex items-center justify-center w-3/4 h-1/2 md:w-1/2 ">
      <div>
        {/* project heading */}
        <div>
          <p className="text-3xl md:text-4xl text-center shadow-lg mb-8 pt-4">
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

        {/* description box */}
        <div className="relative md:mt-44 mt-28 ">
          <p className=" border border-2 border-white text-white p-8 shadow-lg bg-black bg-opacity-50 ">
            <div className="text-xl">
            {experienceDetails[currentExperienceIndex].ExperiencePlace}
            </div>
            <div className="text-xl">
            {experienceDetails[currentExperienceIndex].ExperienceTime}
            </div>
            <div>
            {experienceDetails[currentExperienceIndex].ExperienceDescription}
            </div>
          </p>
        </div>
      </div>

      {/* navigation buttons */}
      <div className="absolute z-20 justify-between flex md:w-full w-screen md:mt-4">
        <Button
          type="submit"
          className="px-2 md:px-4 py-2 md:ml-20 w-16 md:w-auto"
          onClick={goToPreviousExperience}
          disabled={currentExperienceIndex === 0}
        >
          <img src={prevButton} alt="previousButton" />
        </Button>
        <Button
          className="px-2 md:px-4 py-2 md:mr-20 w-16 md:w-auto"
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
