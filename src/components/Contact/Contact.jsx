import React from "react";
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
        <div className="relative z-20 flex flex-col items-center justify-center  pt-16">
          <div className="absolute top-0 left-0 md:ml-4 hidden md:block">
            {/* hidden md:block  */}
            <Sidebar/>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center ">
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

          <div className="flex items-center justify-center md:mt-18 mt-14 ">
            <form className="text-white md:p-8 ">
              <div className="mb-4 md:flex md:flex-row md:gap-7 ">
                <label className="text-xl md:text-2xl mr-2">Name:</label>
                <input
                  type="text"
                  className="bg-purple-400 bg-opacity-50 p-2 text-white md:w-96 w-full "
                />
              </div>
              <div className="mb-4 md:flex md:flex-row md:gap-3">
                <label className="text-xl md:text-2xl mr-2">Contact:</label>
                <input
                  type="text"
                  className="bg-purple-400 bg-opacity-50  p-2 text-white md:w-full w-full"
                />
              </div>
              <div className="mb-4 md:flex md:flex-row md:gap-9">
                <label className="text-xl md:text-2xl mr-2">Email:</label>
                <input
                  type="text"
                  className="bg-purple-400 bg-opacity-50  p-2 text-white md:w-full w-full"
                />
              </div>
              <div className="mb-4 md:flex md:flex-row ">
                <label className="text-xl md:text-2xl mr-2">Message:</label>
                <textarea className="bg-purple-400 bg-opacity-50  p-2 text-white md:w-full w-full"></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded"
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
