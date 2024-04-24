import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import clickToOpen from "../../images/click_to_open.png";

const AboutMe = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const handleShowAboutMe = () => {
    setShowAboutMe(true);
  };
  const handleCloseAboutMe = () => {
    setShowAboutMe(false);
  };
  return (
    <div className="flex items-center justify-center w-3/4 h-3/4">
      {!showAboutMe ? (
        <Button
          type="submit"
          className="text-white text-2xl w-3/4 h-3/4 "
          onClick={handleShowAboutMe}
        >
          <img src={clickToOpen} alt="click to open button" />
        </Button>
      ) : (
        <div className="relative">
          <p className=" border border-4 border-white text-white p-8 shadow-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          id recusandae iusto officiis impedit nesciunt quibusdam reprehenderit
          eligendi excepturi, expedita nemo, mollitia quisquam ea similique!
          Eaque asperiores suscipit voluptatum reprehenderit ipsa rem voluptate
          error aliquam. Saepe id eligendi corrupti, dolorum, velit hic, error
          laborum pariatur a esse aliquam eaque fugit.
        </p>
        <Button className="text-red-600 top-0 right-0 m-2 " onClick={handleCloseAboutMe}>X</Button>
        </div>

        
      )}
    </div>
  );
};

export default AboutMe;
