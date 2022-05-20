import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "@components/Navbar";
import Home from "@pages/Home";
import PokemonList from "@pages/PokemonList";

function App() {
  return (
    <div className="bg-amber-100 h-screen">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemonlist" element={<PokemonList />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
