import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Header from "./components/header/Header";
import GlobalStateProvider from "./contexts/GlobalState";
import NotFound from "./pages/404";
import Area from "./pages/Area";
import Category from "./pages/Category";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <main className="container flex">
        <Sidebar />
        <div className="basis-4/5">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/area/:name" element={<Area />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Routes>
            {/* Without Sidebar */}
            <Route path="/recipe/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>

        </div>
      </main>
      <Footer />
    </GlobalStateProvider>
  );
}

export default App;
