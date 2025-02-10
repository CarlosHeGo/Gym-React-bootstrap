import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Inicio from "./Components/Inicio";
import CardClases from "./Components/CardClases";
import CardMaquinas from "./Components/CardMaquinas";
import Contacto from "./Components/Contacto";
import { ServiciosProvider } from "./Components/ServiciosProvider";
import AreaCliente from "./Components/AreaCliente";

function App() {
  return (
    <ServiciosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="servicios/maquinas" element={<CardMaquinas />} />
            <Route path="servicios/clases" element={<CardClases />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="cliente" element={<AreaCliente />} />
          </Route>
        </Routes>
      </Router>
    </ServiciosProvider>
  );
}

export default App;
