import { Link } from 'react-router-dom';
import './LandingPage.css';
import TextSwapper from '../components/TextSwapper';
import TextLanguage from '../components/TextLanguage';
import ProjectsPage from './ProjectsPage';

function LandingPage() {

    let jobNames = [
        { name: "a Programmer", font: "hacky" },
        { name: "a Developer", font: "hacky" },
        { name: "a Web Developer", font: "hacky" },
        { name: "an Artist", font: "hacky" },
        { name: "a DJ", font: "hacky" },
        { name: "a Student", font: "hacky" },
        { name: "a DJ", font: "hacky" },
        { name: "hired", font: "hacky" },

    ]

    return (
        <div className="LandingPage">
            <div className="LandingPage__Name">
                <div className='LandingPage__Name_First'>Konstantinos</div>
                <div className='LandingPage__Name_Last'>‎ ‎ ‎ ‎ ‎ Katsimpas</div>
            </div>
            <div className='LandingPage__Job'>
                I'm <TextSwapper texts={jobNames} />
            </div>
            <div className='LandingPage__Projects'>
                <TextLanguage texts={{ en: "Take a look at my", de: "Sie dir meine" }} /> <Link to="/projekte"><TextLanguage texts={{ en: "Projects", de: "Projekte" }} /></Link> <TextLanguage texts={{ en: "", de: "an" }} />
            </div>
            <ProjectsPage />
        </div>
    );
}

export default LandingPage;