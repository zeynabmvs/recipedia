import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RecipeDetail from "components/pages/RecipeDetail";
import Favorites from "components/pages/Favorites";
import LandingPage from "components/pages/Landing";
import Main from "components/Main";
import NotFound from "components/pages/NotFound";
import GlobalStateProvider from "src/contexts/GlobalState";
import Archive from "components/pages/Archive";
import FavoritesProvider from "src/contexts/FavoritesContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<LandingPage />} />

      {/* <Route path="" element={<WithSidebarLayout />}> */}
      <Route path="/recipes" element={<Archive />} />
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
      <FavoritesProvider>
        <RouterProvider router={router}></RouterProvider>
      </FavoritesProvider>
    </GlobalStateProvider>
  );
}

export default App;
