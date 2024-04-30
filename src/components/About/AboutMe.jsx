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
          className="text-white text-2xl w-3/4 h-3/4 "
          onClick={handleShowAboutMe}
        >
          <img
            src={clickToOpen}
            alt="click to open button"
            className="w-3/4 h-3/4"
          />
        </Button>
      ) : (
        <div className="relative w-1/2 h-1/2" >
          <div className="absolute top-0 right-0 m-2">
            <Button className="" onClick={handleCloseAboutMe}>
              <img src={closeButton} alt="closeButton" className="w-7 h-7" />
            </Button>
          </div>

          <p className=" border border-2 border-white text-white p-8 shadow-lg bg-black bg-opacity-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            id recusandae iusto officiis impedit nesciunt quibusdam
            reprehenderit eligendi excepturi, expedita nemo, mollitia quisquam
            ea similique! Eaque asperiores suscipit voluptatum reprehenderit
            ipsa rem voluptate error aliquam. Saepe id eligendi corrupti,
            dolorum, velit hic, error laborum pariatur a esse aliquam eaque
            fugit.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
