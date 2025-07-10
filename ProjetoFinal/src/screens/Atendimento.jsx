import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PacienteContext } from "./LocalStorage";

function Atendimento() {
    const location = useLocation()
    const navigate = useNavigate()
    const { pacientes, setPacientes } = useContext(PacienteContext)

    const { paciente, index } = location.state || {}

    const [diagnostico, setDiagnostico] = useState(paciente?.diagnostico || "")

    if (!paciente) return <p>Nenhum paciente está sendo atendido</p>

    const salvarAtendimento = () => {
        const atualizado = [...pacientes]
        atualizado[index] = {
            ...paciente,
            diagnostico,
            atendido: true,
        }
        setPacientes(atualizado)
        alert("Diagnóstico salvo")
        navigate("/filaDePacientes")
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

        <button onClick={salvarAtendimento}>Finalizar atendimento</button>


    </div>
)

}

export default Atendimento
