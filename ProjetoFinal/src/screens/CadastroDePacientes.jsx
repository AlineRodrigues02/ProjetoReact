function CadastroDePacientes() {
  return (
    <div class="container">
      <h1>Cadastro de Paciente</h1>

      <form class="form-triagem" onsubmit="gerarTriagem(); return false;">
        <div class="campo">
          <label for="nome">Nome do Paciente:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite o nome completo"
            required
          />
        </div>

        <div class="campo">
          <label for="motivo">Motivo da Consulta:</label>
          <input
            type="text"
            name="motivo"
            id="motivo"
            placeholder="Ex: Dor no peito, febre..."
            required
          />
        </div>

        <button type="submit" class="botao-enviar">
          Registrar
        </button>
      </form>

      <div class="link-medico">
        <a href='/triagem' target="_blank">
          👉 Ir para a triagem
        </a>
      </div>
    </div>
  );
}

export default CadastroDePacientes;
