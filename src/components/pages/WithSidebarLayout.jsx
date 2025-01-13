import { Outlet } from "react-router-dom";

function WithSidebarLayout() {
  return (
    <div className="z-container flex flex-col-reverse md:flex-row gap-4 md:gap-6 pt-10">
      {/* <Sidebar /> */}
      <section className="basis-4/5">{<Outlet />}</section>
    </div>
  );
}

export default WithSidebarLayout;
