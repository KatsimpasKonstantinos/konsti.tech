import { Link } from 'react-router-dom';
import './NavBar.css'
import DarkModeToggle from './DarkModeToggle';
import LanguageToggle from './LanguageToggle';
import TextLanguage from '../TextLanguage';

function NavBar() {

    const scrollTo = (id: string) => {
        const projectsElement = document.getElementById(id);
        if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="NavBar">
            <div className="NavBar__Left">
                <p className="NavBar__Element"><Link to="/"><TextLanguage texts={{ en: "Home", de: "Start" }} /></Link></p>
            </div>
            <div className="NavBar__Right">
                <p className="NavBar__Element"><Link to="/#projects" onClick={() => scrollTo("projects")}><TextLanguage texts={{ en: "Projects", de: "Projekte" }} /></Link></p>
                <p className="NavBar__Element"><Link to="/contact"><TextLanguage texts={{ en: "Contact", de: "Kontakt" }} /></Link></p>
                <div className="NavBar__Element">
                    <DarkModeToggle />
                </div>
                <div className="NavBar__Element">
                    <LanguageToggle />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;