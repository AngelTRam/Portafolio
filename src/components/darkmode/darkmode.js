import React from "react";
import "./darkmode.css"

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    return (
        <div className="theme-button">
            <input 
                className="theme-mode_input"
                type="checkbox"
                id="theme-mode-toggle"
                onChange={toggleTheme}
            />
            <label>
                theme
            </label>
        </div>
    )
}

export default DarkMode;