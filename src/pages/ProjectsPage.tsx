import "./ProjectsPage.css";
import ImageWebApps from "./Projects/WebApps/image.png";
import ImagePersonal from "./Projects/Personal/image.png";
import ImageSocial from "./Projects/Social/image.png"
import ImageSomething from "./Projects/Something/image.png"
import { Link } from "react-router-dom";
import TextLanguage from "../components/TextLanguage";

function ProjectsPage() {

    return (
        <div className="ProjectsPage">
            <h1><TextLanguage texts={{ en: "My Projects", de: "Meine Projekte" }} /></h1>
            <p><TextLanguage texts={{
                en: "Here are all my Projects Im so proud to show you",
                de: "Hier sind alle meine Projekte die ich Ihnen gerne zeigen möchte"
            }} speed={10} /></p>
            <div className="ProjectsPage__Grid">
                <div className="ProjectsPage__Element ProjectsPage__Element_1">
                    <Link to="/projekte/webapps">
                        <div className="ProjectPage__Image_Wrapper">
                            <img className="ProjectPage__Image" src={ImageWebApps} />
                        </div>
                    </Link>
                </div>
                <div className="ProjectsPage__Element ProjectsPage__Element_2">
                    <Link to="/projekte/personal">
                        <div className="ProjectPage__Image_Wrapper">
                            <img className="ProjectPage__Image" src={ImagePersonal} />
                        </div>
                    </Link>
                </div>
                <div className="ProjectsPage__Element ProjectsPage__Element_3">
                    <Link to="/projekte/social">
                        <div className="ProjectPage__Image_Wrapper">
                            <img className="ProjectPage__Image" src={ImageSocial} />
                        </div>
                    </Link>
                </div>
                <div className="ProjectsPage__Element ProjectsPage__Element_4">
                    <Link to="/projekte/something">
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