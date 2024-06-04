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
        console.log("clicked")
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    return (
        <div className="theme-button">
            <button
                className="theme-switcher-button"
                onChange={toggleTheme}
            >
                Switch theme
            </button>
        </div>
    )
}

export default DarkMode;