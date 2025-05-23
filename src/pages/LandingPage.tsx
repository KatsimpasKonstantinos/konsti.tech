import './LandingPage.css';
import TextSwapper from '../components/TextSwapper';
import ProjectsPage from './ProjectsPage';
import { useEffect } from 'react';
import BreakLine from '../components/BreakLine';


function LandingPage() {

    let jobNames = [
        { en: "I am an Artist", de: "Ich bin ein Künstler", path: "Artist", font: "hacky" },
        { en: "I am an Artist working with showlasers", de: "Ich bin ein Künstler der mit Showlaser arbeitet", path: "ArtistLaser", font: "hacky" },
        { en: "I am an Artist working with Touchdesigner", de: "Ich bin ein Künstler der mit Touchdesigner arbeitet", path: "ArtistTouchdesigner", font: "hacky" },
        { en: "I am a DJ", de: "Ich bin ein DJ", path: "DJ", font: "hacky" },
        { en: "I am a VJ", de: "Ich bin ein VJ", path: "VJ", font: "hacky" },
        { en: "I am a Hacker", de: "Ich bin ein Hacker", path: "Hacker", font: "hacky" },
        { en: "I am a Multimedia Engineer", de: "Ich bin ein Multimedia Ingenieur", path: "MultimediaEngineer", font: "hacky" },
        { en: "I am a Programmer", de: "Ich bin ein Programmierer", path: "Programmer", font: "hacky" },
        { en: "I am a Data Alchemist", de: "Ich bin ein Daten Alchemist", path: "DataAlchemist", font: "hacky" },

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
                <div className='LandingPage__Name_First'>KONSTANTINOS</div>
                <div className='LandingPage__Name_Last'>KATSIMPAS</div>
            </div>
            <div className='LandingPage__Job'>
                <TextSwapper texts={jobNames} speed={50} delay={3000} />
            </div>
            <BreakLine />
            <div className='LandingPage__Presentation'>
                Hi, I'm Konsti <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />
                Aenean eget molestie enim <br />
                Maecenas fringilla nulla sed imperdiet ultricies <br />
                Vivamus nec aliquet purus
            </div>
            <BreakLine />
            <ProjectsPage />
        </div>
    );
}

export default LandingPage;