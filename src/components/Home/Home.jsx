import React from "react";
import backgroundImage1 from "../../images/home_bg2.png";
import backgroundImage2 from "../../images/home_middleImg.png";
import backgroundImage3 from "../../images/home_design.png";
import homeMinion from "../../images/home_minion.png";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage1})` }}
    >
      <div
        className="absolute bg-center h-screen w-full"
        style={{ backgroundImage: `url(${backgroundImage2})`, top: 0 }}
      >
        <div className="relative z-20 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold text-white text-center shadow-lg">
            <span
              className="text-purple-600"
              style={{
                textShadow:
                  "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
              }}
            >
              FRONTEND WEB DEVELOPER
            </span>
          </h1>
          <div className="flex flex-col items-center space-y-4">
            {/* <p className="text-xl font-semibold text-white text-center shadow-lg">
            _______________________________
          </p> */}
            <p className="text-3xl font-bold text-center shadow-lg">
              <span
                className="text-purple-600"
                style={{
                  textShadow:
                    "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
                }}
              >
                I AM AKANSHA
              </span>
            </p>
          </div>
        </div>
      </div>
      <img className="absolute" src={homeMinion} alt="homeMinion" />
    </div>
  );
};

export default Home;
