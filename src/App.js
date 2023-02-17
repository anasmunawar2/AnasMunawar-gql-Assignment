import PokemonsList from "./pages/PokemonsList";
import { Route, Routes } from "react-router-dom";
import PokemonDetail from "./pages/PokemonDetail";
import Navbar from "./components/Navbar";

//using react-router-dom to route between listing page and detail page
function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<PokemonsList />} />
          <Route path="/:key" element={<PokemonDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
