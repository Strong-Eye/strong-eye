var database = require("../database/config");

function cadastrar(id_usuario, codigo, id_empresa, cargo) {
    var instrucaoSql = `
        INSERT INTO codigo_ativacao(codigo_ativacao, fk_empresa, fk_cargo, ativo, fk_criado_por_usuario) VALUES ('${codigo}', ${id_empresa}, ${cargo}, 1, ${id_usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(id_usuario, id_empresa, filtro, pesquisa) {
    let filtroEscolhido = "";

    if(filtro == 1) {
        filtroEscolhido = `ORDER BY cargo ASC;`
    }
    if(filtro == 2) {
        filtroEscolhido = `ORDER BY nome ASC;`
    }
    if(filtro == 3) {
        filtroEscolhido = `ORDER BY nome DESC;`
    }

    var instrucaoSql = `
        SELECT 
            u.id as id,
            IFNULL(u.nome, '-') AS nome,
            ca.nome AS cargo,
            IFNULL(u.email, '-') AS email,
            IFNULL(u.data_criacao, '-') AS data_criacao,
            c.codigo_ativacao AS codigo_ativacao,
        CASE
            WHEN ativo = 1 THEN 'Código ativado'
            ELSE 'Código Inativo'
        END AS status
        FROM
            codigo_ativacao c
                LEFT JOIN
            usuarios u ON c.id = u.fk_codigo_ativacao
                JOIN
            cargos ca ON ca.id = c.fk_cargo
    `;

    if(pesquisa.length > 1) {
        instrucaoSql += `WHERE u.email LIKE '%${pesquisa}%'`
    }
    
    instrucaoSql += filtroEscolhido;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(codigo) {
    var instrucaoSql = `
        UPDATE codigo_ativacao SET ativo = NOT ativo WHERE codigo = '${codigo}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarCargo(codigo, cargo) {
    var instrucaoSql = `
        UPDATE codigo_ativacao SET fk_cargo = ${cargo} WHERE codigo_ativacao = '${codigo}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(codigo) {
    var instrucaoSql = `
        DELETE FROM codigo_ativacao WHERE codigo_ativacao = '${codigo}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    deletar,
    atualizarCargo
}
