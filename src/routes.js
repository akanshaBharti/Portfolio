import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AboutMe from './components/About/AboutMe';
import Skills from './components/Skills/Skills';

const MyRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            {/* <Route path='/aboutme' element = {<AboutMe/>}/> */}
            <Route path='/skills' element = {<Skills/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
