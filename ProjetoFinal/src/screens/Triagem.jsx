import { useState, useContext } from "react";
import { PacienteContext } from "./LocalStorage";

function Triagem() {
  const{pacientes, setPacientes } = useContext(PacienteContext)
  const ultimoPaciente = pacientes[pacientes.length -1]
  
  const[temperatura, setTemperatura] = useState('')
  const[pressao, setPressao] = useState('')
  const[glicemia, setGlicemia] = useState('')
  const[observacao, setObservacao] = useState('')
  const[risco, setRisco] = useState('')

  const enviarTriagem = (e) =>{
    e.preventDefault();
    if(!ultimoPaciente){
       alert("Nenhum Paciente cadastrado")
       return
      }

    const novaTriagem={
        temperatura,
        pressao,
        glicemia,
        observacao,
        risco,
        hora: new Date().toLocaleDateString()
      };
      //Atualiza o ultimo paciente
      const novosPacientes = [...pacientes]
      novosPacientes[pacientes.length -1] ={
        ...ultimoPaciente,
        triagem: novaTriagem,
      }

    setPacientes(novosPacientes)
    alert("Triagem completa")
}
  return (
    <div className="container">
      <h1>Triagem de Pacientes</h1>

      {ultimoPaciente ?(
        <div className="paciente-info">
          <p><strong>Paciente:</strong>{ultimoPaciente.nome}</p>
          <p><strong>Motivo:</strong>{ultimoPaciente.motivo}</p>
        </div>
      ):(
        <p><em>Nenhum paciente cadastrado.</em></p>
      )}

      <form className="form-triagem" onSubmit="enviarTriagem(); return false;">
        <div className="campo">
          <label htmlFor="temperatura">Temperatura (°C):</label>
          <input type="number" 
          id="temperatura" 
          value={temperatura} 
          onChange={(e)=> setTemperatura(e.target.value)}
           required />
        </div>

        <div className="campo">
          <label htmlFor="pressao">Pressão Arterial:</label>
          <input type="text" 
          id="pressao" 
          value={pressao}
          onChange={(e)=> setPressao(e.target.value)}
          required />
        </div>

        <div className="campo">
          <label htmlFor="glicemia">Glicemia (mg/dl):</label>
          <input type="number"
          id="glicemia"
          value={glicemia}
          onChange={(e)=> setGlicemia(e.target.value)}
          required />
        </div>

        <div className="campo">
          <label for="observacao">Observações:</label>
          <textarea id="observacao"
          rows="4"
          value={observacao}
          onChange={(e)=> setObservacao(e.target.value)}
          ></textarea>
        </div>

        <div className="campo">
          <label htmlFor="risco">Classificação de Risco:</label>
          <select id="risco"
          value={risco}
          onChange={(e)=> setRisco(e.target.value)}
          required>
            <option value="">Selecione</option>
            <option value="verde">🟢 Verde - Pouco Urgente</option>
            <option value="amarelo">🟡 Amarelo - Urgente</option>
            <option value="vermelho">🔴 Vermelho - Muito Urgente</option>
          </select>
        </div>

        <button type="submit" className="botao-enviar">
          Enviar ao médico
        </button>
      </form>

      <div className="link-medico">
        <a href="/filaDePacientes">
          👉 Ir para a tela do médico
        </a>
      </div>
    </div>
  );
}
export default Triagem;