import { createContext, useState, useEffect } from "react";

export const PacienteContext = createContext();

export const PacienteProvider = ({ children }) => {
  const [pacientes, setPacientes] = useState(() => {
    const armazenado = localStorage.getItem("pacientes");
    return armazenado ? JSON.parse(armazenado) : [];
  });

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <PacienteContext.Provider value={{ pacientes, setPacientes }}>
      {children}
    </PacienteContext.Provider>
  );
};
