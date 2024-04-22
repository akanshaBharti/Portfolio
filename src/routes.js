import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MyRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            {/* <Route path='/' element = {<Signup/>}/>
            <Route path='/login' element = {<Login/>}/>
            <Route path='/signup' element = {<Signup/>}/> */}
        </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
