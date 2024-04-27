import React from "react";
import contactBgMain from "../../images/contact_bgMain.png";
import contactBg from "../../images/contact_bg.png";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Contact = () => {
  return (
    <div
    className="relative bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: `url(${contactBg})` }}
    >
       <div className="relative z-20 flex flex-col items-center justify-center gap-6 pt-6">
       <div className="absolute top-0 left-0 ml-4">
            <Sidebar />
          </div>
          <h1 className="text-4xl font-bold text-white text-center shadow-lg">
            <span
              className="text-purple-600"
              style={{
                textShadow:
                  "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
              }}
            >
              CONTACT ME
            </span>
          </h1>
          </div>
          <div className="absolute top-0 right-0 mr-4 mt-2 ">
          <Button>
            <Navbar />
          </Button>
        </div>

    </div>
  );
};

export default Contact;
