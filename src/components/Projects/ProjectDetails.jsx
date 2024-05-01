import React, { useState } from "react";
import prevButton from "../../images/prev.png";
import nextButton from "../../images/next.png";
import { Button } from "@material-tailwind/react";
import githubIcon from "../../images/github.png";
import LinkIcon from "../../images/link.png";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const projectDetails = [
    {
      ProjectName: "Project 01",
      GithubLinkIcon: "https://github.com/akanshaBharti",
      ProjectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architectoid recusandae iusto officiis impedit nesciunt quibusdam reprehenderiteligendi excepturi, expedita nemo, mollitia quisquam ea similique!Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptateerror aliquam.",
      ProjectLink: "https://github.com/akanshaBharti",
    },
    {
      ProjectName: "Project 02",
      GithubLinkIcon: "",
      ProjectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architectoid recusandae iusto officiis impedit nesciunt quibusdam reprehenderiteligendi excepturi, expedita nemo, mollitia quisquam ea similique!Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptateerror aliquam.",
      ProjectLink: "Project02.com",
    },
    {
      ProjectName: "Project 03",
      GithubLinkIcon: "",
      ProjectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architectoid recusandae iusto officiis impedit nesciunt quibusdam reprehenderiteligendi excepturi, expedita nemo, mollitia quisquam ea similique!Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptateerror aliquam.",
      ProjectLink: "Project03.com",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectDetails.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center justify-center w-3/4 h-1/2 md:w-1/2">
      <div>
        {/* project heading */}
        <div>
          <p className="text-4xl text-center shadow-lg mb-8 pt-4">
            <span
              className="text-white"
              style={{
                textShadow:
                  "-1px -1px 0 #9333ea, 1px -1px 0 #9333ea, -1px 1px 0 #9333ea, 1px 1px 0 #9333ea",
              }}
            >
              {projectDetails[currentProjectIndex].ProjectName}
            </span>
          </p>
        </div>

        {/* description box */}
        <div className="relative mt-32 md:mt-44 ">
          <p className=" border border-2 border-white text-white p-4 shadow-lg bg-black bg-opacity-50 flex flex-col items-center">
            <div className="">
              <Link
                to={projectDetails[currentProjectIndex].GithubLinkIcon}
                target="blank"
              >
                <img src={githubIcon} alt="githubIcon" className="w-16 h-16" />
              </Link>
            </div>
            <div>{projectDetails[currentProjectIndex].ProjectDescription}</div>
            <div className="">
              <Link
                to={projectDetails[currentProjectIndex].ProjectLink}
                target="blank"
              >
                <img src={LinkIcon} alt="LinkIcon" className="w-7 h-7" />
              </Link>
            </div>
          </p>
        </div>
      </div>

      {/* navigation buttons */}
      <div className="absolute justify-between flex w-full md:mt-4">
        <Button
          type="submit"
          className="px-4 py-2  md:ml-20"
          onClick={goToPreviousProject}
          disabled={currentProjectIndex === 0}
        >
          <img src={prevButton} alt="previousButton" />
        </Button>
        <Button
          className="px-4 py-2 md:mr-20"
          onClick={goToNextProject}
          disabled={currentProjectIndex === projectDetails.length - 1}
        >
          <img src={nextButton} alt="nextButton" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectDetails;
