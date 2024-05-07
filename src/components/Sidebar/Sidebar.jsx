import React from 'react'
import { Link } from 'react-router-dom'
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedin.png";
import gmailIcon from "../../images/gmail.png";
import twitterIcon from "../../images/twitter.png";


const Sidebar = () =>{
    return( 
        <div className='pt-32'>
            <Link to="https://github.com/akanshaBharti" target='blank'><img src={githubIcon} alt='github' className='py-4 px-4'/></Link>
            <Link to="https://www.linkedin.com/in/akansha-bharti/" target='blank'><img src={linkedinIcon} alt='linkedin' className='py-4 px-4'/></Link>
            <Link to="https://twitter.com/Akansha_1213" target='blank'><img src={twitterIcon} alt='twitter' className='py-4 px-4'/></Link>
            <Link to="akanshabharti1213@gmail.com" target='blank'><img src={gmailIcon} alt='gmail' className='py-4 px-4'/></Link>

        </div>
    ) 
}

export default Sidebar