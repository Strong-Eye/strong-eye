var database = require("../database/config");

function buscarLongradouroPorCep(cep) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT * FROM longradouros
            WHERE cep = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [cep]);
}

function inserirLongradouro(cep, longradouro, bairro, localidade, uf, estado) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
        var instrucaoSql = `
            INSERT INTO longradouros (cep, longradouro, bairro, localidade, uf, estado) VALUES
                (?, ?, ?, ?, ?, ?);
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [cep, longradouro, bairro, localidade, uf, estado]);
}

function buscarRadarPorUuid(uuid) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT * FROM radares
        WHERE uuid = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [uuid]);
}

function inserirRadar(fk_empresa, uuid, modelo) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        INSERT INTO radares (fk_empresa, uuid, modelo) VALUES 
	        (?, ?, ?);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [fk_empresa, uuid, modelo]);
}

function inserirEnderecoRadar(fk_radar, fk_endereco, km, complemento) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        INSERT INTO endereco_radar (fk_radar, fk_endereco, km, complemento) VALUES 
	        (?, ?, ?, ?);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [fk_radar, fk_endereco, km, complemento]);
}

function inserirParametros(fk_componente, fk_radar, valor_maximo, valor_minimo) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        INSERT INTO parametros (fk_componente, fk_radar, valor_maximo, valor_minimo) VALUES 
	        (?, ?, ?, ?);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [fk_componente, fk_radar, valor_maximo, valor_minimo]);
}

function buscarParametros(fk_radar) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT * FROM parametros p INNER JOIN componentes c ON p.fk_componente = c.id WHERE p.fk_radar = ?; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [fk_radar]);
}

module.exports = {
    buscarLongradouroPorCep,
    inserirLongradouro, 
    buscarRadarPorUuid, 
    inserirRadar,
    inserirEnderecoRadar,
    buscarParametros,
    inserirParametros
};