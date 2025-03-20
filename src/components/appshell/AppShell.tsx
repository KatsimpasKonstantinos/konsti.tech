import Footer from "./Footer";
import NavBar from "./NavBar";
import './AppShell.css';

function AppShell(props: React.PropsWithChildren<{}>) {

    return (
        <div className="AppShell">
            <div className="AppShell__Navbar AppShell__Outline" />
            <div className="AppShell__Navbar  AppShell__Outline">
                <NavBar />
            </div>
            <div className="AppShell__Navbar  AppShell__Outline" />

            <div className="AppShell__Content  AppShell__Outline" />
            <div className="AppShell__Content">
                {props.children}
            </div>
            <div className="AppShell__Content  AppShell__Outline" />


            <div className="AppShell__Footer" />
            <div className="AppShell__Footer  AppShell__Outline">
                <Footer />
            </div>
            <div className="AppShell__Footer" />
        </div>
    );
}

export default AppShell;