import React, { createContext, useEffect, useState } from "react";

export const ServiciosContext = createContext();

export const ServiciosProvider = ({ children }) => {
  const [maquinas, setMaquinas] = useState([]);
  const [clases, setClases] = useState([]);

  useEffect(() => {
    fetch("/servicios.json") // Cargar desde `public/`
      .then(response => response.json())
      .then(data => {
        setMaquinas(data.maquinas);
        setClases(data.clases);
      })
      .catch(error => console.error("Error cargando servicios:", error));
  }, []);

  // ✅ Función para reservar una clase
  const reservarClase = (claseID, diaId, horaId) => {
    setClases((prevClases) =>
      prevClases.map((clase) => {
        if (clase.id === claseID) {
          return {
            ...clase,
            horario: clase.horario.map((dia) => {
              if (dia.dia === diaId) {
                return {
                  ...dia,
                  horas: dia.horas.map((hora) =>
                    hora.hora === horaId && hora.plazas > 0
                      ? { ...hora, plazas: hora.plazas - 1 }
                      : hora
                  ),
                };
              }
              return dia;
            }),
          };
        }
        return clase;
      })
    );
  };

  // ✅ Función para reservar una máquina
  const reservarMaquina = (maquinaID, diaId, horaId) => {
    setMaquinas((prevMaquinas) =>
      prevMaquinas.map((maquina) => {
        if (maquina.id === maquinaID) {
          return {
            ...maquina,
            horario: maquina.horario.map((dia) => {
              if (dia.dia === diaId) {
                return {
                  ...dia,
                  horas: dia.horas.map((hora) =>
                    hora.hora === horaId && hora.plazas > 0
                      ? { ...hora, plazas: hora.plazas - 1 }
                      : hora
                  ),
                };
              }
              return dia;
            }),
          };
        }
        return maquina;
      })
    );
  };

  return (
    <ServiciosContext.Provider value={{ maquinas, clases, reservarClase, reservarMaquina }}>
      {children}
    </ServiciosContext.Provider>
  );
};
