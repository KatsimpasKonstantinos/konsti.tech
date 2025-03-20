import './LandingPage.css';
import TextSwapper from '../components/TextSwapper';
import ProjectsPage from './ProjectsPage';
import { useEffect } from 'react';


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

    const scrollTo = (id: string) => {
        const projectsElement = document.getElementById(id);
        if (projectsElement) {
            projectsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1); // Remove the '#' from the hash
            scrollTo(id);
        }
    }, []);



    return (
        <div className="LandingPage">
            <div className="LandingPage__Name">
                <div className='LandingPage__Name_First'>Konstantinos</div>
                <div className='LandingPage__Name_Last'>‎ ‎ ‎ ‎ ‎ Katsimpas</div>
            </div>
            <div className='LandingPage__Job'>
                I'm <TextSwapper texts={jobNames} />
            </div>
            <ProjectsPage />
        </div>
    );
}

export default LandingPage;