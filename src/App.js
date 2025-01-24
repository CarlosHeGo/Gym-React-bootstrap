import './App.css';
import { useEffect, useState } from 'react';
import Navegacion from './Navegacion';
import CardClases from './CardClases';
import CardMaquinas from './CardMaquinas';

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
        <CardClases clases={clases}></CardClases>
        <CardMaquinas maquinas={maquinas}></CardMaquinas>
       
    </div>
  );
}

export default App;
