import { useEffect } from "react";
import "./DarkModeToggle.css";

function DarkModeToggle() {
    const themes = ["light", "dark"];

    function init() {
        let theme = getThemeFromLocalStorage() || "light";
        setElements(theme);
        document.querySelector("html")?.style.setProperty("background-color", "var(--background-color-primary)");
    }

    init();

    function setElements(theme: string) {
        document.querySelector("body")?.setAttribute("data-theme", theme);
        const toggleElement = document.querySelector(".DarkModeToggle__Ball");
        if (theme === "dark") {
            toggleElement?.classList.remove("DarkModeToggle__Ball--Light");
            toggleElement?.classList.add("DarkModeToggle__Ball--Dark");

        } else {
            toggleElement?.classList.add("DarkModeToggle__Ball--Light");
            toggleElement?.classList.remove("DarkModeToggle__Ball--Dark");
        }
    }

    function toggle() {
        const currentTheme = document.querySelector("body")?.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setElements(newTheme);
        saveThemeToLocalStorage()
    }


    function saveThemeToLocalStorage() {
        const currentTheme = document.querySelector("body")?.getAttribute("data-theme");
        if (currentTheme && themes.includes(currentTheme)) {
            localStorage.setItem("theme", currentTheme);
        }
    }

    function getThemeFromLocalStorage() {
        const theme = localStorage.getItem("theme");
        if (theme && themes.includes(theme)) {
            return theme;
        }
    }


    return (
        <div className="DarkModeToggle" onClick={() => toggle()}>
            <div className={`DarkModeToggle__Ball ${getThemeFromLocalStorage() === "dark" ? "DarkModeToggle__Ball--Dark" : "DarkModeToggle__Ball--Light"}`}>

            </div>
        </div>
    )
}

export default DarkModeToggle