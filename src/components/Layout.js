import {Outlet} from "react-router-dom";

function Layout() {
    return(
        <main>
            <Outlet></Outlet>
        </main>
    );
};

export default Layout;