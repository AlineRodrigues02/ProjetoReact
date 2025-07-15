import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PacienteContext } from "./LocalStorage";
import "../Styles/Atendimento.css"

function Atendimento() {
    const location = useLocation()
    const navigate = useNavigate()
    const { pacientes, setPacientes } = useContext(PacienteContext)

    const { paciente } = location.state || {}

     if (!paciente) return <p>Nenhum paciente está sendo atendido</p>
    const [diagnostico, setDiagnostico] = useState(paciente?.diagnostico || "")

    const finalizarAtendimento= () =>{
        const atualizados = [...pacientes]
        const index = pacientes.findIndex(p =>
            p.id === paciente.id)

        if (index !== -1){
            atualizados[index] = {
                ...atualizados[index],
                atendido: true,
                diagnostico,
            }
            setPacientes(atualizados)
            alert("Atendimento finalizado!")
            navigate("/FilaDePacientes")
        }else{
            alert("Paciente não encontrado")
        }

    }

    
return (
    <div className="container">
        <h2>Detalhes do Atendimento</h2>
        <p><strong>Nome:</strong>{paciente.nome}</p>
        <p><strong>Motivo:</strong>{paciente.motivo}</p>
        <p><strong>Risco:</strong>{paciente.triagem?.risco}</p>
        <p><strong>Temperatura:</strong>{paciente.triagem?.temperatura}</p>
        <p><strong>Pressão:</strong>{paciente.triagem?.pressao}</p>
        <p><strong>Glicemia:</strong>{paciente.triagem?.glicemia}</p>
        <p><strong>Observações</strong>{paciente.triagem?.observacao}</p>

        <div className="campo">
            <label>Diagnóstico:</label>
            <textarea rows="4" value={diagnostico} onChange={(e)=> setDiagnostico(e.target.value)}/>
        </div>

        <button onClick={finalizarAtendimento}>Finalizar atendimento</button>


    </div>
)

}

export default Atendimento
