import CadastroDePacientes from "./screens/CadastroDePacientes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Triagem from "./screens/Triagem";
import FilaDePacientes from "./screens/FilaDePacientes";
import FilaDeEspera from "./screens/FilaDeEspera";
import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CadastroDePacientes />} />
          <Route path="/triagem" element={<Triagem />} />
          <Route path="/filaDePacientes" element={<FilaDePacientes />} />
          <Route path="/filaDeEspera" element={<FilaDeEspera />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
