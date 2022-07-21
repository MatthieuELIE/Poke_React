import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "@components/Navbar";

import Home from "@pages/Home";

import PokemonList from "@pages/PokemonList";
import PokemonPage from "@pages/PokemonPage";

import ItemList from "@pages/ItemList";
import ItemPage from "@pages/ItemPage";

import LoginPage from "@pages/LoginPage";

function App() {
  return (
    <div className="bg-amber-100 h-screen">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemonlist" element={<PokemonList />} />
            <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
            <Route path="/itemlist" element={<ItemList />} />
            <Route path="/item/:itemId" element={<ItemPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
