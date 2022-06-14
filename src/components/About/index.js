import React from "react";
import "./index.css"
import {MdEmail} from 'react-icons/md'
import {GrLinkedin} from 'react-icons/gr'
import{AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillGithub} from "react-icons/ai"

export default function about() {
    return(
       
        <div className="abo">
            <h1>Shashank Chutke</h1>
            <h3>Software Developer</h3>
            <small><a href="https://super-cool-site-by-shashankusinggithub.netlify.app/">www.shashank.com</a></small> <br/>
            <button className="email"><MdEmail className="icon"/> Email</button>
            <button className="linkedin"><GrLinkedin className="icon"/> Linkedin</button>
            <div className="About">
                <h3>About</h3>
                <p>Skilled web developer using technology such as React, JavaScript, Python, CSS, Flask ( more adding on 😜) to solve problems. seeking employment where I can add value to the team and organisation. </p></div>
            <div className="links"><ul >
                <li><AiFillFacebook/></li>
                <li><AiFillInstagram/></li>
                <li><AiFillTwitterSquare/></li>
                <li><AiFillGithub/></li>
            </ul></div>
        </div>
    )
}

