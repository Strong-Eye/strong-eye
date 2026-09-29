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
  var codigoVar = criarCodigoAtivacao();
  var idEmpresaVar = sessionStorage.getItem("ID_EMPRESA");
  var cargoVar = cargo_input.value;

  fetch('/codigo/cadastrar', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        codigoServer: codigoVar,
        idEmpresaServer: idEmpresaVar,
        cargoServer: cargoVar
    })
  })
}