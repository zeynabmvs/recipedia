import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Area from "components/Area";
import Category from "components/Category";
import Details from "components/Details";
import Favorites from "components/Favorites";
import Home from "components/Home";
import Main from "components/Main";
import NotFound from "components/NotFound";
import WithSidebarLayout from "components/WithSidebarLayout";
import GlobalStateProvider from "src/contexts/GlobalState";
import Archive from "components/Archive";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<Home />} />

      <Route path="" element={<WithSidebarLayout />}>
        <Route path="/recipes" element={<Archive />} />
        <Route path="category/:name" element={<Category />} />
        <Route path="area/:name" element={<Area />} />
      </Route>
      <Route path="/recipe/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <GlobalStateProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalStateProvider>
  );
}

export default App;
