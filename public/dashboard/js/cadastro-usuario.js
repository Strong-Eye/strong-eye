let usuariosListados = []

function criarCodigoAtivacao() {
  let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let codigo = "";

  for(let i=0;i<5;i++) {
      caracter = Math.floor(Math.random() * (caracteres.length))   
      codigo += caracteres[caracter] 
  }

  return codigo;
}

function exibirCodigo(codigo) {
  exibicao_codigo.innerText = codigo
}

async function cadastrarCodigo() {
  var idUsuarioVar = sessionStorage.getItem("ID_USUARIO");
  var codigoVar = criarCodigoAtivacao();
  var idEmpresaVar = sessionStorage.getItem("ID_EMPRESA");
  var cargoVar = cargo_input.value;

  await fetch('/codigo/cadastrar', {
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

  exibirCodigo(codigoVar)
  listarCodigos();
  setTimeout(() => exibicao_codigo.style.display = 'none', 10000);
}

function listarCodigos() {
  usuariosListados = [];  

  let paramPesquisa = "";
  let paramFiltro = select_filtro.value;

  if(ipt_pesquisa.value) {
    paramPesquisa = ipt_pesquisa.value;
  }

  var idUsuarioVar = sessionStorage.getItem("ID_USUARIO");
  var idEmpresaVar = sessionStorage.getItem("ID_EMPRESA");

  fetch('/codigo/listar/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        idUsuarioServer: idUsuarioVar,
        idEmpresaServer: idEmpresaVar,
        filtroServer: paramFiltro,
        paramPesquisaServer: paramPesquisa
    })
  }).then(function (resposta) {
    resposta.json().then(json => {
        if(json.length < 1) {
          tabela_codigos.innerHTML = "<div class='bg-light'>Nenhum usuário encontrado!</div>"
          return
        }
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

            if(json[i].email != "-") {
              usuariosListados.push(
                {
                  'id': json[i].id,
                  'email': json[i].email,
                  'codigo': json[i].codigo_ativacao
                }
              );
            }

            dataFormatada = json[i].data_criacao;

            tabela_codigos.innerHTML += `
              <tr id="linha_${i}">
                <td>${json[i].nome}</td>
                <td>${json[i].cargo}</td>
                <td>${json[i].email}</td>
                <td>${dataFormatada}</td> 
                <td>
                  <div class="d-flex flex-row justify-content-between">
                    ${json[i].codigo_ativacao}
                    <button class="btn btn-danger" onclick="deletarCodigo(${i}), listarCodigos()">
                      <img src="../../assets/icon/delete.png" style='filter: brightness(0) invert(1);'>
                    </button>
                  </div>
                </td>
                <dialog id=popup${i}>
                  <form method="dialog">
                    <div class="col-md pe-0">
                      <div class="form-floating">
                        <select class="form-select" id="pessoa3_input">
                          <option selected>Escolha um membro</option>
                        </select>
                        <label for="pessoa2_input">Membro</label>
                      </div>
                    </div>
                    <button type="button" class="modal-custom" onclick="remover()">Excluir</button>
                    <button type="submit" id="fechar-popup2" onclick=popup${i}.close>Fechar</button>
                  </form>
                </dialog>
                <td>${json[i].status}</td>
              </tr>
            `
        }
        listarUsuarios(usuariosListados);
    });
  })
}

async function deletarCodigo(linha) {
  if(confirm("Você deseja mesmo excluir esse código?")) {
    let linhaTabela = document.getElementById(`linha_${linha}`);
    let registrosLinha = linhaTabela.getElementsByTagName("td");
    let codigo = registrosLinha[4].innerText
    
    fetch(`/codigo/deletar/${codigo}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      if(resposta.ok) {
        listarCodigos()
      } else {
        alert("Algo deu errado e o código não pode ser apagado.")
      }
    }) 
  } 
}

function listarUsuarios(usuarios) {
  let selectExcluir = document.getElementById("pessoa2_input");
  let selectAtualizar = document.getElementById("pessoa3_input3");

  let html = `<option value="" selected disabled>Escolha um membro</option>`;
  
  for(let i=0;i<usuarios.length;i++) {
    html += `<option value="${usuarios[i].id}">${usuarios[i].email}</option>`;
  }

  if (selectExcluir) selectExcluir.innerHTML = html;
  if (selectAtualizar) selectAtualizar.innerHTML = html; 
}

function deletarUsuario(id) {
  if(confirm("Você deseja mesmo excluir esse usuário?")) {
    fetch(`/usuarios/remover/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      if(resposta.ok) {
        listarCodigos()
      } else {
        alert("Algo deu errado e o usuário não pode ser apagado.")
      }
    }) 
  } 
}

function remover() {
  let id = document.getElementById("pessoa2_input").value;

  if(!id) {
    alert("Selecione um usuário para remover!")
    return;
  }

  deletarUsuario(id)
}

function atualizarUsuario(id, cargo) {
    let codigoUsuario;

    for(let i=0;i<usuariosListados.length;i++) {
      if(usuariosListados[i].id == id){
        codigoUsuario = usuariosListados[i].codigo;
      }
    }

    if(confirm("Você deseja mesmo atualizar esse usuário?")) {
    fetch(`/codigo/atualizar/`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        codigoServer: codigoUsuario,
        cargoServer: cargo
      })
      }).then(function (resposta) {
        if(resposta.ok) {
          listarCodigos()
        } else {
          alert("Algo deu errado e o código não pode ser atualizar.")
        }
      }) 
  } 
}

function atualizar() {
  let id = document.getElementById("pessoa3_input3").value;
  let cargo = document.getElementById("cargo2_input2").value;

  if(!id) {
    alert("Selecione um membro para atualizar!")
    return;
  }

  atualizarUsuario(id, cargo)
}

listarCodigos();