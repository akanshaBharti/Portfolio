import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path='/aboutme' element = {<AboutMe/>}/> */}
      </Routes>
    </BrowserRouter>

    

  );
};

export default MyRoutes;
