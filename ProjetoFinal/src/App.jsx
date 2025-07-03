import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroDePacientes from "./screens/CadastroDePacientes";
import Triagem from "./screens/Triagem";
import FilaDePacientes from "./screens/FilaDePacientes";
import FilaDeEspera from "./screens/FilaDeEspera";
import { PacienteProvider } from "./screens/LocalStorage";
import "./App.css";


function App() {
  return (
    <>
    <PacienteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadastroDePacientes />} />
          <Route path="/triagem" element={<Triagem />} />
          <Route path="/filaDePacientes" element={<FilaDePacientes />} />
          <Route path="/filaDeEspera" element={<FilaDeEspera />} />
        </Routes>
      </BrowserRouter>
    </PacienteProvider>
    </>
  );
}

export default App;
