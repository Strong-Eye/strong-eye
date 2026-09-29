var database = require("../database/config");

function cadastrar(codigo, id_empresa, cargo) {
    var instrucaoSql = `
        INSERT INTO codigo_ativacao(codigo_ativacao, fk_empresa, fk_cargo, ativo) VALUES ('${codigo}', ${id_empresa}, ${cargo}, 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}
