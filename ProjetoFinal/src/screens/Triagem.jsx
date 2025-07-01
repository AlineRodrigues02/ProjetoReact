

function Triagem() {
  return (
    <div class="container">
      <h1>Triagem de Pacientes</h1>

      <div class="paciente-info">
        {" "}
        <div id="dadosPaciente"></div>
      </div>

      <form class="form-triagem" onsubmit="enviarTriagem(); return false;">
        <div class="campo">
          <label for="temperatura">Temperatura (°C):</label>
          <input type="number" id="temperatura" required />
        </div>

        <div class="campo">
          <label for="pressao">Pressão Arterial:</label>
          <input type="text" id="pressao" required />
        </div>

        <div class="campo">
          <label for="glicemia">Glicemia (mg/dl):</label>
          <input type="number" id="glicemia" required />
        </div>

        <div class="campo">
          <label for="observacao">Observações:</label>
          <textarea id="observacao" rows="4"></textarea>
        </div>

        <div class="campo">
          <label for="risco">Classificação de Risco:</label>
          <select id="risco" required>
            <option value="">Selecione</option>
            <option value="verde">🟢 Verde - Pouco Urgente</option>
            <option value="amarelo">🟡 Amarelo - Urgente</option>
            <option value="vermelho">🔴 Vermelho - Muito Urgente</option>
          </select>
        </div>

        <button type="submit" class="botao-enviar">
          Enviar ao médico
        </button>
      </form>

      <div class="link-medico">
        <a href="/filaDePacientes" target="_blank">
          👉 Ir para a tela do médico
        </a>
      </div>
    </div>
  );
}
export default Triagem;