import { Link } from 'react-router-dom';
import './NavBar.css'
import DarkModeToggle from './DarkModeToggle';

function NavBar() {

    return (
        <nav className="NavBar">
            <div className="NavBar__Container">
                <div className="NavBar__Left">
                    <p className="NavBar__Element"><Link to="/">Home</Link></p>
                </div>
                <div className="NavBar__Right">
                    <p className="NavBar__Element"><Link to="/projects">Projects</Link></p>
                    <p className="NavBar__Element"><Link to="kontakt">Kontakt</Link></p>
                    <DarkModeToggle />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;