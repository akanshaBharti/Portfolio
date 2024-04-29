import React, { useState } from "react";

const ProjectDetails = () => {
  const projectDetails = [
    {
      ProjectName: "Project 01",
      // GithubLinkIcon : "",
      ProjectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architectoid recusandae iusto officiis impedit nesciunt quibusdam reprehenderiteligendi excepturi, expedita nemo, mollitia quisquam ea similique!Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptateerror aliquam.",
      ProjectLink: "xyz.com",
    },
    {
      ProjectName: "Project 02",
      // GithubLinkIcon : "",
      ProjectDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architectoid recusandae iusto officiis impedit nesciunt quibusdam reprehenderiteligendi excepturi, expedita nemo, mollitia quisquam ea similique!Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptateerror aliquam.",
      ProjectLink: "Project02.com",
    },
    {
      ProjectName: "Project 03",
      // GithubLinkIcon : "",
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
    <div className="flex items-center justify-center w-3/4 h-3/4 ">
      <div>
        {/* project heading */}
        {/* <div className="flex flex-col items-center"> */}
        <div>
          <p className="text-3xl text-center shadow-lg mb-8">
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
        <div className="relative">
          <p className=" border border-2 border-white text-white p-8 shadow-lg">
            {projectDetails[currentProjectIndex].ProjectDescription}
            <br></br>
            {projectDetails[currentProjectIndex].ProjectLink}
          </p>
        </div>
      </div>
      
      {/* navigation buttons */}
      <div className="flex justify-center mt-4">
        <button
          className="mr-4 px-4 py-2 bg-gray-800 text-white rounded shadow"
          onClick={goToPreviousProject}
        //   disabled={currentProjectIndex === 0}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded shadow"
          onClick={goToNextProject}
        //   disabled={currentProjectIndex === projectDetails.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
