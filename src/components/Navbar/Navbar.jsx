import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarIcon from "../../images/navbar.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="relative">
            <div className="fixed top-0 right-0 z-50 p-4">
                <img src={navbarIcon} alt="Navbar Icon" className="w-16 h-16 cursor-pointer" onClick={toggleNavbar} />
            </div>
            {isOpen && (
                <div className="fixed  right-0  bg-gray-800 text-white w-56 p-4 mr-2 rounded-lg">
                    <div className="flex flex-col items-center">
                        <Link to="/home" className="py-2 px-4 hover:bg-gray-700">Home</Link>
                        {/* <Link to="/aboutme" className="py-2 px-4 hover:bg-gray-700">About Me</Link> */}
                        <Link to="/experience" className="py-2 px-4 hover:bg-gray-700">Work Experience</Link>
                        <Link to="/skills" className="py-2 px-4 hover:bg-gray-700">Skills</Link>
                        <Link to="/projects" className="py-2 px-4 hover:bg-gray-700">Projects</Link>
                        <Link to="/contact" className="py-2 px-4 hover:bg-gray-700">Contact Me</Link>
                    </div>
                    
                </div>
            )}
        </div>
    );
}

export default Navbar;