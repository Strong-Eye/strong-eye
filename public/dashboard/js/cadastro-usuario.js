function criarCodigoAtivacao() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigo = "";

    for(let i=0;i<5;i++) {
        caracter = Math.floor(Math.random() * (caracteres.length))   
        codigo += caracteres[caracter] 
    }
    return codigo;
}

function cadastrarCodigo() {
  var idUsuarioVar = sessionStorage.getItem("ID_USUARIO");
  var codigoVar = criarCodigoAtivacao();
  var idEmpresaVar = sessionStorage.getItem("ID_EMPRESA");
  var cargoVar = cargo_input.value;

  fetch('/codigo/cadastrar', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuarioVar,
        codigoServer: codigoVar,
        idEmpresaServer: idEmpresaVar,  
        cargoServer: cargoVar
    })
  })
}

function listarCodigos() {
  var idUsuarioVar = sessionStorage.getItem("ID_USUARIO");
  var idEmpresaVar = sessionStorage.getItem("ID_EMPRESA");

  fetch('/codigo/listar', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuarioVar,
        idEmpresaServer: idEmpresaVar
    })
  }).then(function (resposta) {
    resposta.json().then(json => {
        console.log(resposta);
        tabela_codigos.innerHTML = `
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Cargo</th>
                <th scope="col">Email Corporativo</th>
                <th scope="col">Data de Cadastro</th>
                <th scope="col">Código de ativação</th>
                <th scope="col">Ativo</th>
              </tr>
            </thead>
        `;

        let opcoes = {
            day: "numeric",
            year: "numeric",
            month: "numeric",
            hour: "numeric",
            minute: "numeric"
        }

        for(let i=0;i<json.length;i++) {
            if(!json[i].data_criacao == "-") {
              dataFormatada = new Date(json[i].data_criacao).toLocaleDateString("pt-BR", opcoes);
            }

            dataFormatada = json[i].data_criacao;

            tabela_codigos.innerHTML += `
              <tr>
                <td>${json[i].nome}</td>
                <td>${json[i].cargo}</td>
                <td>${json[i].email}</td>
                <td>${dataFormatada}</td>
                <td>
                  <div class="d-flex flex-row justify-content-between">
                    ${json[i].codigo_ativacao}
                    <button class="btn btn-danger">
                      <img src="../../assets/icon/delete.png" style='filter: brightness(0) invert(1);'>
                    </button> 
                    <button class="btn btn-warning">
                      <img src="../../assets/icon/update.png" style='filter: brightness(0) invert(1);'>
                    </button>
                  </div>
                </td>
                <td>${json[i].status}</td>
              </tr>
            `
        }
    });
  })
}

listarCodigos();