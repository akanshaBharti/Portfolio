import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';

const MyRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            {/* <Route path='/login' element = {<Login/>}/> */}
        </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
