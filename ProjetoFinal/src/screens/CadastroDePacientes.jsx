import { useState, useContext } from "react";
import { PacienteContext } from "./LocalStorage";
import Triagem from "./Triagem";
import { Link } from "react-router-dom";

function CadastroDePacientes() {
  const {pacientes,setPacientes} = useContext(PacienteContext)
  const [nome, setNome] = useState('')
  const [motivo, setMotivo] = useState('')

  const gerarTriagem = (e) =>{e.preventDefault()

  if(!nome || !motivo) return alert("Preencha os campos! ")

  const novoPaciente ={
    nome,
    motivo,
    triagem: null,
    atendido: false,
  }

  setPacientes([...pacientes,novoPaciente])

  setNome('')
  setMotivo('')

  }

  return (
    <div className="container">
      <h1>Cadastro de Paciente</h1>

      <form className="form-triagem" onSubmit={gerarTriagem}>
        <div className="campo">
          <label htmlFor="nome">Nome do Paciente:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome completo"
            value={nome} onChange={(e)=> setNome(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="motivo">Motivo da Consulta:</label>
          <input
            type="text"
            name="motivo"
            id="motivo"
            placeholder="Ex: Dor no peito, febre..."
            value={motivo}
            onChange={(e)=> setMotivo(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="botao-enviar">
          Registrar
        </button>
      </form>
      <div className="link-medico">
      <Link to="/triagem">
      👉 Ir para a triagem
      </Link></div>

    </div>
  );
}

export default CadastroDePacientes;
