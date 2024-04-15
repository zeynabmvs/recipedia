import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import GlobalStateProvider from "./contexts/GlobalState";
import NotFound from "./pages/404";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <main className="container justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/recipe/:id" element={<Details />}>
            Recipe
          </Route>
          <Route path="/favorites" element={<Favorites />}>
            Favorites
          </Route>
          <Route path="/category/:name" element={<Category />}></Route>
          <Route path="*" element={<NotFound />}>
            404
          </Route>
        </Routes>
      </main>
    </GlobalStateProvider>
  );
}

export default App;
