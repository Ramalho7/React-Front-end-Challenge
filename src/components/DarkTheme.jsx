import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkTheme = ({setIsDark, isDark}) => {
    
    useEffect(() => {
        const selectTheme = localStorage.getItem("selectTheme");
        if (selectTheme === "dark") {
            setIsDark(true);
            document.body.setAttribute("data-theme", "dark");
        } else {
            setIsDark(false);
            document.body.setAttribute("data-theme", "light");
        }
    }, []);

    const toggleTheme = () => {
        if (!isDark) {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("selectTheme", "dark");
        } else {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("selectTheme", "light");
        }
        setIsDark(!isDark);
    };

    return (
        <div className="dark_mode">
            <label htmlFor="darkmode-toggle" className="dark_mode_label">
                <input
                    className="dark_mode_input"
                    type="checkbox"
                    id="darkmode-toggle"
                    checked={isDark}
                    onChange={toggleTheme}
                    style={{ display: "none" }}
                />
                <span className="dark_mode_slider">
                    <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                </span>
            </label>
        </div>
    );
};

export default DarkTheme;