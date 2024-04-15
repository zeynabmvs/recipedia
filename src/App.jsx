import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import NotFound from "./pages/404";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="container">
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
          <Route path="*" element={<NotFound />}>
            404
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
