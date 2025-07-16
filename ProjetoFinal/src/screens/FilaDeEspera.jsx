import { useContext } from "react";
import { useState, useEffect } from "react";
import { PacienteContext } from "./LocalStorage";
import "../Styles/FiladeEspera.css"
function FilaDeEspera() {
  const { pacientes } = useContext(PacienteContext);
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000); //Atulizar a cada 1 segundo

    return () => clearInterval(timer);
  }, []);

  const getStatus = (p) => {
    if (p.atendido) return "✅ Atendimento Finalizado"
    if (p.emAtendimento) return "✅ Em Atendimento"
    if (p.triagem) return "👨‍⚕️ Aguardando Consulta"
    return "📝 Aguardando Triagem"
  }

  return (

    <div className="container tv-layout">
      <div className="painel-imagem">
        <img src="../public/Riscos.jpg" alt="Classificação de risco" className="imagemDeRisco" />
      </div>



      <div className="painel-lista">
        <h1>Fila de Espera</h1>
        <div className="painel">
          {pacientes.length === 0 ? (
            <p>Nenhum paciente cadastrado</p>
          ) : (
            pacientes.map((paciente, index) => (

              <div key={index} className="painel-card">
                <p><strong>Nome:</strong>{paciente.nome}</p>
                <p><strong>Status:</strong>{getStatus(paciente)}</p>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Campo de hora  */}
      <h2 className="hora-atual">
      🕒 {horaAtual.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit', second: '2-digit'})}
    </h2>
      {/* <div className="filaDeEspera" id="filaDeEspera"></div> */}
    </div>
  );
}

export default FilaDeEspera;
