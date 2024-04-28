import React from "react";

const ProjectDetails = () => {
  const projectDetails = [
    {
      ProjectName: "Project 01",
      // GithubLinkIcon : "",
      ProjectDescription: "wqerfdsxcvxasdertewyueiwoqv c",
      ProjectLink: "xyz.com",
    },
    // {
    //   ProjectName: "xyz",
    //   // GithubLinkIcon : "",
    //   ProjectDescription: "wqerfdsxcvxasdertewyueiwoqv c",
    //   ProjectLink: "xyz.com",
    // },
  ];

  return (
    <div className="flex items-center justify-center w-3/4 h-3/4 ">
        {projectDetails.map((projectV) => (
            <div >
                {/* project heading */}
               <div flex flex-col items-center space-y-4>
            <p className="text-3xl text-center shadow-lg">
              <span
                className="text-white"
                style={{
                  textShadow:
                    "-1px -1px 0 #9333ea, 1px -1px 0 #9333ea, -1px 1px 0 #9333ea, 1px 1px 0 #9333ea",
                }}
              >
                {projectV.ProjectName}
              </span>
            </p>
          </div>

          {/* description box */}
          <div className="relative">
            <div className=" border border-2 border-white text-white p-8 shadow-lg">
                <p>{projectV.ProjectDescription}</p>
                <p>{projectV.ProjectLink}</p>

            </div>

          </div>
            </div>
          
          
        ))}
      {/* </div> */}
    </div>
  );
};

export default ProjectDetails;
