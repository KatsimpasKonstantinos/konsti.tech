import Footer from "./Footer";
import NavBar from "./NavBar";

function AppShell(props: React.PropsWithChildren<{}>) {

    return (
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    );
}

export default AppShell;