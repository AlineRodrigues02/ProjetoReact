import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroDePacientes from "./screens/CadastroDePacientes";
import Triagem from "./screens/Triagem";
import FilaDePacientes from "./screens/FilaDePacientes";
import FilaDeEspera from "./screens/FilaDeEspera";
import { PacienteProvider } from "./screens/LocalStorage";
import Menu from "./screens/Menu";
import "./App.css";
import Atendimento from "./screens/Atendimento";


function App() {
  return (
    <>
    <PacienteProvider>
      <BrowserRouter>
      <Menu/>
       <div className="App-logo">
                <img src="../public/logo.png" alt="logo" />
            </div>
        <Routes>
          <Route path="/" element={<CadastroDePacientes />} />
          <Route path="/triagem" element={<Triagem />} />
          <Route path="/filaDePacientes" element={<FilaDePacientes />} />
          <Route path="/Atendimento" element={<Atendimento />} />
          <Route path="/filaDeEspera" element={<FilaDeEspera />} />
        </Routes>
      </BrowserRouter>
    </PacienteProvider>
    </>
  );
}

export default App;
