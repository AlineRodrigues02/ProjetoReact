import { Link } from "react-router-dom";
// import "../Styles/Menu.css"
import "../Styles/Menu.css"

function Menu(){
    return(
        <nav className="menu">
            <ul>
                <li><Link to="/">🏥 Cadastro</Link></li>
                <li><Link to="/Triagem">📝 Triagem</Link></li>
                <li><Link to="/FilaDePacientes">👨‍⚕️ Fila de Pacientes</Link></li>
                <li><Link to="/FilaDeEspera">📺 Painel TV</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;