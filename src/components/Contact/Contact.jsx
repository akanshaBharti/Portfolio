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
      <div className="absolute w-full h-screen bg-center">
        <div className="relative z-20 flex flex-col items-center justify-center gap-6 pt-6">
          <div className="absolute top-0 left-0 ml-4">
            <Sidebar />
          </div>
          <h1 className="text-5xl font-bold text-white text-center shadow-lg">
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

          {/* <div className="items-center justify-center">
         <form className="">
          <div>
            <label className="text-2xl mr-2 ">Full Name: </label>
            <input type="text"/>
          </div>
          <div>
            <label className="text-2xl mr-2">Contact No:</label>
            <input type="text"/>
          </div>
          <div>
            <label className="text-2xl mr-2">Email:</label>
            <input type="text"/>
          </div>
          <div>
            <label className="text-2xl mr-2">Message:</label>
            <input type="text"/>
          </div>
         </form>
        </div> */}

          <div className="flex items-center justify-center mt-20  ">
            <form className="text-white ">
              <div className="mb-4 flex flex-row">
                <label className="text-2xl mr-2 ">Full Name:</label>
                <input
                  type="text"
                  className="bg-purple-400 bg-opacity-50  p-2 text-white w-full"
                />
              </div>
              <div className="mb-4 flex flex-row">
                <label className="text-2xl mr-2">Contact No:</label>
                <input
                  type="text"
                  className="bg-purple-400 bg-opacity-50  p-2 text-white w-full"
                />
              </div>
              <div className="mb-4 flex flex-row">
                <label className="text-2xl mr-2">Email:</label>
                <input
                  type="text"
                  className="bg-purple-400 bg-opacity-50  p-2 text-white w-full"
                />
              </div>
              <div className="mb-4 flex flex-row">
                <label className="text-2xl mr-2">Message:</label>
                <textarea className="bg-purple-400 bg-opacity-50  p-2 text-white w-full"></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </div>
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
