
import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";

function WithSidebarLayout() {
    return ( <div className="flex">
        <Sidebar/>
        <section className="basis-4/5">
            {<Outlet />}
        </section>
    </div> );
}

export default WithSidebarLayout;