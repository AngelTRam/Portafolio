import React from "react";
import './social.css'
//image imports
import OcticonsMarkGitHub from './img/Octicons-mark-github.svg';

const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a>
            <img className='item' src={OcticonsMarkGitHub} alt="Octicons Mark GitHub" />
            </a>
        </div>  
    )
};

export default SocialIcons;