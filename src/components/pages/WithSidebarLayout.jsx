import { Outlet } from "react-router-dom";
import Sidebar from "components/layout/Sidebar";

function WithSidebarLayout() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
      <Sidebar />
      <section className="basis-4/5">{<Outlet />}</section>
    </div>
  );
}

export default WithSidebarLayout;
