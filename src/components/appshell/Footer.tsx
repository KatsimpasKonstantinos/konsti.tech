import { Link } from 'react-router-dom';
import './Footer.css';
import TextLanguage from '../TextLanguage';

function Footer() {
    return (
        <footer className="Footer">
            <div className='Footer__Name'>
                <p>&copy; {new Date().getFullYear()} Konstantinos Katsimpas</p>
            </div>
            <div className='Footer__Rechts'>
                <p className='Footer__Rechts_Text'><Link to="/contact"><TextLanguage texts={{ en: "Contact", de: "Kontakt" }} /></Link></p>
                <p className='Footer__Rechts_Text'><Link to="/imprint"><TextLanguage texts={{ en: "Imprint", de: "Impressum" }} /></Link></p>
            </div>
        </footer>
    );
}

export default Footer;