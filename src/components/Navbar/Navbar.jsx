import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarIcon from "../../images/navbar.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="relative z-50">
            <div className="fixed top-0 right-0 z-50 p-4  ">
                <img src={navbarIcon} alt="Navbar Icon" className="w-16 h-16 cursor-pointer" onClick={toggleNavbar} />
            </div>
            {isOpen && (
                <div className="navbar fixed right-0 bg-black bg-opacity-75 text-white w-56 p-4 mr-2 rounded-lg border border-white">
                    <div className="flex flex-col items-center text-sm">
                        <Link to="/home" className="py-2 px-4 hover:bg-gray-700">Home</Link>
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
