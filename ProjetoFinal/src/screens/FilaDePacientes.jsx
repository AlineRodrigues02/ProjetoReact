import { useContext } from "react";
import { Link } from "react-router-dom";
import { PacienteContext } from './LocalStorage';
import '../Styles/FilaDePacientes.css';

function FilaDePacientes() {
  const { pacientes, setPacientes } = useContext(PacienteContext);

  const pacientesTriados = pacientes.filter(p => p.triagem && !p.atendido);

  const prioridade = { vermelho: 1, amarelo: 2, verde: 3 };
  pacientesTriados.sort((a, b) => prioridade[a.triagem.risco] - prioridade[b.triagem.risco]);

  const atenderPaciente = (index) => {
    const pacienteTriado = pacientesTriados[index];

    const pacienteIndex = pacientes.findIndex(p =>
      p.nome === pacienteTriado.nome &&
      p.motivo === pacienteTriado.motivo &&
      p.triagem?.risco === pacienteTriado.triagem.risco
    );

    if (pacienteIndex !== -1) {
      const atualizado = [...pacientes];
      atualizado[pacienteIndex].emAtendimento = true;
      setPacientes(atualizado);
    } else {
      alert("Erro: paciente não encontrado!");
    }
  };

  return (
    <div className="container">
      <h1>Fila de Pacientes</h1>

      {pacientesTriados.length === 0 ? (
        <p>Nenhum paciente aguardando atendimento</p>
      ) : (
        pacientesTriados.map((paciente, index) => (
          <div key={index}  className={`paciente-card ${paciente.triagem.risco}`}>
            <p><strong>Nome:</strong> {paciente.nome}</p>
            <p>
              <strong>Risco:</strong>
              {" "}
              {paciente.triagem.risco === 'vermelho' && '🔴'}
              {paciente.triagem.risco === 'amarelo' && '🟡'}
              {paciente.triagem.risco === 'verde' && '🟢'}
              {" "}
              {paciente.triagem.risco}
            </p>

            {!paciente.emAtendimento ? (
              <button onClick={() => atenderPaciente(index)}>Atender</button>
            ) : (
              <Link to="/atendimento" state={{ paciente, index }}>
                <button>Detalhes do Atendimento</button>
              </Link>
            )}
            <hr />
          </div>
        ))
      )}

     
    </div>
  );
}

export default FilaDePacientes;
