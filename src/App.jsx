import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Area from "src/components/pages/Area";
// import Category from "src/components/pages/Category";
import RecipeDetail from "src/components/pages/RecipeDetail";
import Favorites from "src/components/pages/Favorites";
import LandingPage from "src/components/pages/Landing";
import Main from "components/Main";
import NotFound from "src/components/pages/NotFound";
import WithSidebarLayout from "src/components/pages/WithSidebarLayout";
import GlobalStateProvider from "src/contexts/GlobalState";
import Archive from "src/components/pages/Archive";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<LandingPage />} />

      {/* <Route path="" element={<WithSidebarLayout />}> */}
        <Route path="/recipes" element={<Archive />} />
        {/* <Route path="category/:name" element={<Category />} /> */}
        {/* <Route path="area/:name" element={<Area />} /> */}
      {/* </Route> */}

      <Route path="/recipe/:id" element={<RecipeDetail />} />
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
