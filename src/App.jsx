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
import Archive from "components/pages/Archive";
import FavoritesProvider from "src/contexts/FavoritesContext";
import RecipesProvider from "src/contexts/RecipesContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recipes" element={<Archive />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RecipesProvider>
      <FavoritesProvider>
        <RouterProvider router={router}></RouterProvider>
      </FavoritesProvider>
    </RecipesProvider>
  );
}

export default App;
