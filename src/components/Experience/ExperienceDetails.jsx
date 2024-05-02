import React, { useState } from "react";
import prevButton from "../../images/prev.png";
import nextButton from "../../images/next.png";
import { Button } from "@material-tailwind/react";


const ExperienceDetails = () => {
  const experienceDetails = [
    {
      ExperienceName: "Experience 01",
      ExperienceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architectoid recusandae iusto officiis impedit nesciunt quibusdam reprehenderiteligendi excepturi, expedita nemo, mollitia quisquam ea similique!Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptateerror aliquam.",
    },
    {
      ExperienceName: "Experience 02",
      ExperienceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architectoid recusandae iusto officiis impedit nesciunt quibusdam reprehenderiteligendi excepturi, expedita nemo, mollitia quisquam ea similique!Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptateerror aliquam.",
    },
    {
      ExperienceName: "Experience 03",
      ExperienceDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architectoid recusandae iusto officiis impedit nesciunt quibusdam reprehenderiteligendi excepturi, expedita nemo, mollitia quisquam ea similique!Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptateerror aliquam.",
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
            {experienceDetails[currentExperienceIndex].ExperienceDescription}
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
