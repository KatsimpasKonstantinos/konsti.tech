function DarkModeToggle() {

    function toggle() {
        const currentTheme = document.querySelector("body")?.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.querySelector("body")?.setAttribute("data-theme", newTheme);
    }


    return (
        <button onClick={() => toggle()}><p>darkmodetoggler</p></button>
    )
}

export default DarkModeToggle