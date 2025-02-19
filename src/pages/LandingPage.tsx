import { Link } from 'react-router-dom';
import './LandingPage.css';
import TextSwapper from '../components/TextSwapper';

function LandingPage() {

    let jobNames = [
        { name: " Programmer", font: "hacky" },
        { name: " Developer", font: "hacky" },
        { name: " Web Developer", font: "hacky" },
        { name: "n Artist", font: "hacky" },
        { name: " DJ", font: "hacky" },
    ]

    return (
        <div className="LandingPage">
            <div className="LandingPage__Name">
                <div className='LandingPage__Name_First'>First Name</div>
                <div className='LandingPage__Name_Last'>‎ ‎ ‎ ‎ ‎ Last Name</div>
            </div>
            <div className='LandingPage__Job'>
                Im a<TextSwapper texts={jobNames} />
            </div>
            <div className='LandingPage__Projects'>
                Take a Look at my <Link to="/projects">Projects</Link>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}

export default LandingPage;