function criarCodigoAtivacao() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let codigo = "";

    for(let i=0;i<5;i++) {
        caracter = Math.floor(Math.random() * (caracteres.length))   
        codigo += caracteres[caracter] 
    }
    return codigo;
}