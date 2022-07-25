import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import UserContextProvider from "@components/UserContextProvider";
import ProtectedRoute from "@components/ProtectedRoute";

import Navbar from "@components/Navbar";

import Home from "@pages/Home";

import PokemonList from "@pages/PokemonList";
import PokemonPage from "@pages/PokemonPage";

import ItemList from "@pages/ItemList";
import ItemPage from "@pages/ItemPage";

import FavoritesPage from "@pages/FavoritesPage";

import LoginPage from "@pages/LoginPage";

function App() {
  return (
    <UserContextProvider>
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
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <FavoritesPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
