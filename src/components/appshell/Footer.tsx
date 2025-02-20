import { Link } from 'react-router-dom';
import './Footer.css';
import TextLanguage from '../TextLanguage';

function Footer() {
    return (
        <footer className="Footer">
            <div className='Footer__Name'>
                <p>&copy; {new Date().getFullYear()} Konstantinos Katsimpas</p>
            </div>
            <div className='Footer__Links'>
                <p className='Footer__Link_Text'><Link to="/kontakt"><TextLanguage texts={{ en: "Contact", de: "Kontakt" }} /></Link></p>
                <p className='Footer__Link_Text'><Link to="/impressum"><TextLanguage texts={{ en: "Imprint", de: "Impressum" }} /></Link></p>
            </div>
        </footer>
    );
}

export default Footer;