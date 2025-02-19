import "./ProjectsPage.css";
import ImageWebApps from "./Projects/WebApps/image.png";
import ImagePersonal from "./Projects/Personal/image.png";
import ImageSocial from "./Projects/Social/image.png"
import ImageSomething from "./Projects/Something/image.png"
import { Link } from "react-router-dom";

function ProjectsPage() {

    return (
        <div className="ProjectsPage">
            <h1>My Projects</h1>
            <p>ajslkfjalsjflksajdfljaölsdjf</p>
            <div className="ProjectsPage__Grid">
                <div className="ProjectsPage__Element ProjectsPage__Element_1">
                    <Link to="/projects/webapps">
                        <div className="ProjectPage__Image_Wrapper">
                            <img className="ProjectPage__Image" src={ImageWebApps} />
                        </div>
                    </Link>
                </div>
                <div className="ProjectsPage__Element ProjectsPage__Element_2">
                    <Link to="/projects/personal">
                        <div className="ProjectPage__Image_Wrapper">
                            <img className="ProjectPage__Image" src={ImagePersonal} />
                        </div>
                    </Link>
                </div>
                <div className="ProjectsPage__Element ProjectsPage__Element_3">
                    <Link to="/projects/social">
                        <div className="ProjectPage__Image_Wrapper">
                            <img className="ProjectPage__Image" src={ImageSocial} />
                        </div>
                    </Link>
                </div>
                <div className="ProjectsPage__Element ProjectsPage__Element_4">
                    <Link to="/projects/something">
                        <div className="ProjectPage__Image_Wrapper">
                            <img className="ProjectPage__Image" src={ImageSomething} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default ProjectsPage;