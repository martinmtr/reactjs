import { useState } from "react";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailconteiner/ItemDetailContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos!" />}
          />
          <Route
            path="/categoria/:categParam"
            element={<ItemListContainer />}
          />
          <Route path="/detalle/:idParam" element={<ItemDetailContainer />} />
          <Route path="*" element={<h3>404: Página no encontrada</h3>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
