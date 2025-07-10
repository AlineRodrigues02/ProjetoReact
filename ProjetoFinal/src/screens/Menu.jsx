import { Link } from "react-router-dom";
// import "../Styles/Menu.css"
import "../Styles/Menu.css"

function Menu(){
    return(
        <nav className="menu">
            <ul>
                <li><Link to="/">🏥 Cadastro</Link></li>
                <li><Link to="/Triagem">📝 Triagem</Link></li>
                <li><Link to="/filaDePacientes">👨‍⚕️ Fila de Pacientes</Link></li>
                <li><Link to="/filaDeEspera">📺 Painel TV</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;