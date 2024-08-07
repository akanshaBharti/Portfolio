import React, { useState } from "react";
import prevButton from "../../images/prev.png";
import nextButton from "../../images/next.png";
import { Button } from "@material-tailwind/react";
import { Link} from "react-router-dom";
import github from "../../images/githubIcon.png";
import link32 from "../../images/link32.png";

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
      GithubLinkIcon:
        "https://github.com/Online-Examination-Portal/online_exam_ui",
      ProjectDescription:
        "It is a digital platform that enables users to conduct and take exams over the Internet. My role was of frontend developer, creating intuitive and responsive Ui, intergrating API's and ensuring a seamless user experience. Engaged in teamwork with senior developers. Completed Phase 1 - Admin Panel of the website (It is desktop optimized).",
      ProjectStacks: "ReactJS | Material UI | CSS",
      ProjectLink: "https://onlineexamination.netlify.app/",
    },
    {
      ProjectName: "Random Password Generator",
      GithubLinkIcon:
        "https://github.com/akanshaBharti/Random_Password_Generator",
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
      {/* project heading */}
      <div>
        <p className="navbar text-3xl md:text-4xl text-center shadow-lg mb-8 ">
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
      <div className="divPara relative md:mt-34 mt-28 ">
        <p className="gap-2 border border-2 border-white text-white p-4 shadow-lg bg-black bg-opacity-50 flex flex-col items-center ">
          <div className="flex gap-6">
            <Link
              to={projectDetails[currentProjectIndex].GithubLinkIcon}
              target="blank"
              className="z-50"
            >
              <img src={github} alt="githubIcon" className="w-12 h-12 " />
            </Link>
            
            <Link
            to={projectDetails[currentProjectIndex].ProjectLink}
            target="blank"
            className="z-50"
          >
            <img src={link32} alt="LinkIcon" className="h-9 mt-2 " />
          </Link>
          </div>
          <div>{projectDetails[currentProjectIndex].ProjectDescription}</div>
          <div>{projectDetails[currentProjectIndex].ProjectStacks}</div>
         
        </p>
        
      </div>


      {/* navigation buttons */}
      <div className="absolute z-20 justify-between flex  md:w-full w-screen  md:mt-4 mb-[14rem] md:mb-0">
        <Button
          type="submit"
          className="px-2 md:px-4 py-2 md:ml-20 md:w-16 w-14 md:w-auto"
          onClick={goToPreviousProject}
          disabled={currentProjectIndex === 0}
        >
          <img src={prevButton} alt="previousButton" />
        </Button>
        <Button
          className="px-2 md:px-4 py-2 md:mr-20 md:w-16 w-14 md:w-auto"
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
