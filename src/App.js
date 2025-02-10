import "./App.css";
import { useEffect, useState } from "react";
import Navegacion from "./Components/Navegacion";
import CardClases from "./Components/CardClases";
import CardMaquinas from "./Components/CardMaquinas";

function App() {
  const [maquinas, setMaquinas] = useState([]);
  const [clases, setClases] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      const response = await fetch("/servicios.json");
      const data = await response.json();
      setMaquinas(data.maquinas);
      setClases(data.clases);
    };
    fetchServicios();
  }, []);

  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <header className="text-center py-4">
        <Navegacion></Navegacion>
      </header>
      {clases.length > 0 ? (
        <CardClases clases={clases}></CardClases>
      ) : (
        <p className="text-center mt-4">
          No hay clases disponibles en este momento.
        </p>
      )}

      {maquinas.length > 0 ? (
        <CardMaquinas maquinas={maquinas} />
      ) : (
        <p className="text-center mt-4">
          No hay máquinas disponibles en este momento.
        </p>
      )}
    </div>
  );
}

export default App;
