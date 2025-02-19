import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <div className='Footer__Name'>
                <p>&copy; {new Date().getFullYear()} FirstName LastName</p>
            </div>
            <div className='Footer__Links'>
                <p className='Footer__Link_Text'><Link to="/kontakt">Kontakt</Link></p>
                <p className='Footer__Link_Text'><Link to="/impressum">Impressum</Link></p>
            </div>
        </footer>
    );
}

export default Footer;