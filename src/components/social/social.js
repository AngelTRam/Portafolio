import React from "react";
import './social.css'
//image imports
import GitHub from './img/github.svg';
import Gmail from './img/gmail2.svg';
import Linkedin from './img/linkedin2.svg';

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a>
            <img className='item' src={GitHub} alt="Octicons Mark GitHub" />
            </a>
            <a>
            <img className='item' src={Gmail} alt="Octicons Mark GitHub" />
            </a>
            <a>
            <img className='item' src={Linkedin} alt="Octicons Mark GitHub" />
            </a>
        </div>  
    )
};

export default SocialIcons;