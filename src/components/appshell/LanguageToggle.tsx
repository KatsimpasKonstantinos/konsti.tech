import { language } from '../../App';
import './LanguageToggle.css';

function LanguageToggle() {
    const languages = ["de", "en"];

    function toggle() {
        console.log("toggle");
        language.value = languages[(languages.indexOf(language.value) + 1) % languages.length];
        document.documentElement.lang = language.value;
    }

    return (
        <div className="LanguageToggle" onClick={() => toggle()}>
            <p>{language}</p>
        </div>
    );
}

export default LanguageToggle;