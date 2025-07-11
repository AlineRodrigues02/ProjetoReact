import { useContext } from "react";
import { PacienteContext } from "./LocalStorage";

function FilaDeEspera() {
  const {pacientes} = useContext(PacienteContext);
  
  const getStatus = (p) =>{
    if (p.atendido) return "✅ Atendimento Finalizado"
    if (p.emAtendimento) return "✅ Em Atendimento"
    if (p.triagem) return "👨‍⚕️ Aguardando Consulta"
    return "📝 Aguardando Triagem"
  }

  return (
    <div className="container">
      <h1>Fila de Espera</h1>
      <div className="painel">
        {pacientes.length ===0 ?(
          <p>Nenhum paciente cadastrado</p>
        ):(
          pacientes.map((paciente, index) => (
            <div key={index} className={`painel-card ${paciente.triagem?.risco || ''}`}>
              <p><strong>Nome:</strong>{paciente.nome}</p>
              <p><strong>Status:</strong>{getStatus(paciente)}</p>
              </div>
          ))
        )}
      </div>
      <div className="filaDeEspera" id="filaDeEspera"></div>
    </div>
  );
}

export default FilaDeEspera;
