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
      ProjectName: "Ordinateur - Society's Website",
      GithubLinkIcon: "https://github.com/4shreyas5/Ordinateur-Website",
      ProjectDescription:
        "Created an official website of Ordinateur - The Computer Science Society Of Hansraj College as a Software Engineering Project. It was a team project, my role was of frontend developer.",
      ProjectStacks: "ReactJS | Tailwind CSS",
        ProjectLink: "https://github.com/akanshaBharti",
    },
    {
      ProjectName: "Online Examination Portal",
      GithubLinkIcon: "https://github.com/Online-Examination-Portal/online_exam_ui",
      ProjectDescription:
        "It is a digital platform that enables users to conduct and take exams over the Internet. My role was of frontend developer, creating intuitive and responsive Ui, intergrating API's and ensuring a seamless user experience. Engaged in teamwork with senior developers. Completed Phase 1 - Admin Panel of the website (It is desktop optimized).",
      ProjectStacks: "ReactJS | Material UI | CSS",
      ProjectLink: "https://onlineexamination.netlify.app/",
    },
    {
      ProjectName: "Random Password Generator",
      GithubLinkIcon: "https://github.com/akanshaBharti/Random_Password_Generator",
      ProjectDescription:
        "This password generator provides a simple and secure way to generate random passwords based on your specific criteria. Whether you need a password for your email, social media, or online accounts, our tool has you covered. Generated passwords can be copied to clipboard with one click.",
      ProjectStacks: "ReactJS | Tailwind CSS",
      ProjectLink: "https://randomcutomized-password-generator.vercel.app/",
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
    <div className="flex flex-col items-center justify-center w-full h-1/2 md:w-1/2 h-auto m-2">
      <div>
        {/* project heading */}
        <div>
          <p className="text-3xl md:text-4xl text-center shadow-lg mb-8 ">
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
        <div className="relative md:mt-44 mt-32 ">
          <p className=" border border-2 border-white text-white p-4 shadow-lg bg-black bg-opacity-50 flex flex-col items-center ">
            <div className="">
            <Link
                to={projectDetails[currentProjectIndex].GithubLinkIcon}
                target="blank"
              >
                <img src={githubIcon} alt="githubIcon" className="w-16 h-16" />
              </Link>
            </div>
            <div>{projectDetails[currentProjectIndex].ProjectDescription}</div>
            <div>{projectDetails[currentProjectIndex].ProjectStacks}</div>
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
      <div className="absolute z-20 justify-between flex  md:w-full w-screen  md:mt-4">
        <Button
          type="submit" 
          className="px-2 md:px-4 py-2 md:ml-20 w-16 md:w-auto"
          onClick={goToPreviousProject}
          disabled={currentProjectIndex === 0}
        >
          <img src={prevButton} alt="previousButton" />
        </Button>
        <Button
          className="px-2 md:px-4 py-2 md:mr-20 w-16 md:w-auto"
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
