import { createContext, useContext, useEffect, useState } from "react";

export const ClasesContext = createContext();

export const ClasesProvider = ({ children }) => {
    const [clases, setClases] = useState([]);
    useEffect(() => {
        const fetchClases = async () => {
            const response = await fetch('/servicios.json');
            const data = await response.json();
            setClases(data);
        }
        fetchClases();
    }, []);

    return (
        <ClasesProvider.Provider value={clases}>
            {children}
        </ClasesProvider.Provider>
    )
}
export const useClases = () => useContext(ClasesContext);