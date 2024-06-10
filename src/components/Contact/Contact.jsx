import React, { useState, useRef } from "react";
import contactBg from "../../images/contact_bg.png";
import { Button } from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!contact) {
      newErrors.contact = "Contact is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm(
          "service_mkmmv7h",
          "template_wbly34v",
          form.current,
          "DI_HBtf80DLmjRnyD"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("SUCCESS");
            setName("");
            setContact("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED", error.text);
            alert("FAILED");
          }
        );
    }

  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="absolute w-full h-screen bg-center">
        <div className="relative z-20 flex flex-col items-center justify-center  pt-16">
          <div className="absolute md:top-0 md:left-0 md:ml-4 md:block hidden">
            <Sidebar />
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
            <form
              className="text-white md:p-8 "
              ref={form}
            >
              <div className="mb-4 md:flex md:flex-row md:gap-7 ">
                <label className="text-xl md:text-2xl mr-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`bg-purple-400 bg-opacity-50 p-2 text-white md:w-96 w-full ${
                    errors.name ? "border-red-500 border-2" : ""
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name}</span>
                )}
              </div>
              <div className="mb-4 md:flex md:flex-row md:gap-3">
                <label className="text-xl md:text-2xl mr-2">Contact:</label>
                <input
                  type="number"
                  name="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className={`bg-purple-400 bg-opacity-50 p-2 text-white md:w-full w-full ${
                    errors.contact ? "border-red-500 border-2" : ""
                  }`}
                />
                {errors.contact && (
                  <span className="text-red-500">{errors.contact}</span>
                )}
              </div>
              <div className="mb-4 md:flex md:flex-row md:gap-9">
                <label className="text-xl md:text-2xl mr-2">Email:</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`bg-purple-400 bg-opacity-50 p-2 text-white md:w-full w-full ${
                    errors.email ? "border-red-500 border-2" : ""
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="mb-4 md:flex md:flex-row ">
                <label className="text-xl md:text-2xl mr-2">Message:</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`bg-purple-400 bg-opacity-50 p-2 text-white md:w-full w-full ${
                    errors.message ? "border-red-500 border-2" : ""
                  }`}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500">{errors.message}</span>
                )}
              </div>
              <button
                onClick={handleSubmit}
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
