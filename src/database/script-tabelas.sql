CREATE DATABASE IF NOT EXISTS strong_eye;
USE strong_eye;

CREATE TABLE empresas (
  id INT NOT NULL AUTO_INCREMENT,
  razao_social VARCHAR(50) NOT NULL,
  nome_fantasia VARCHAR(45),
  cnpj CHAR(14) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (razao_social),
  UNIQUE (cnpj)
);

CREATE TABLE cargos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE longradouros (
  cep INT NOT NULL,
  longradouro VARCHAR(45) NOT NULL,
  bairro VARCHAR(45) NOT NULL,
  localidade VARCHAR(45) NOT NULL,
  uf VARCHAR(45) NOT NULL,
  estado VARCHAR(45) NOT NULL,
  PRIMARY KEY (cep)
);

CREATE TABLE componentes (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE radares (
  id INT NOT NULL AUTO_INCREMENT,
  fk_empresa INT NOT NULL,
  uuid CHAR(36) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  status TINYINT(1) NOT NULL DEFAULT 1,
  data_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE (uuid),
  CONSTRAINT fk_radares_empresa
    FOREIGN KEY (fk_empresa) REFERENCES empresas(id),
  CHECK (status IN (0, 1))
);

-- Sem a FK para usuarios (adicionada no final por causa do ciclo)
CREATE TABLE codigo_ativacao (
  id INT NOT NULL AUTO_INCREMENT,
  codigo_ativacao CHAR(5),
  fk_empresa INT NOT NULL,
  fk_cargo INT NOT NULL,
  ativo TINYINT NOT NULL DEFAULT 1,
  data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fk_criado_por_usuario INT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_codigo_ativacao_empresa
    FOREIGN KEY (fk_empresa) REFERENCES empresas(id),
  CONSTRAINT fk_codigo_ativacao_cargo
    FOREIGN KEY (fk_cargo) REFERENCES cargos(id),
  CHECK (ativo IN (0, 1))
);

CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  fk_codigo_ativacao INT NOT NULL,
  data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE (email),
  CONSTRAINT fk_usuarios_codigo_ativacao
    FOREIGN KEY (fk_codigo_ativacao) REFERENCES codigo_ativacao(id)
);

ALTER TABLE codigo_ativacao
  ADD CONSTRAINT fk_codigo_ativacao_usuario
    FOREIGN KEY (fk_criado_por_usuario) REFERENCES usuarios(id);

CREATE TABLE tarefas (
  id INT NOT NULL AUTO_INCREMENT,
  fk_usuario_solicitante INT NOT NULL,
  fk_usuario_designado INT NOT NULL,
  fk_radar INT NOT NULL,
  data DATETIME,
  status VARCHAR(20) NOT NULL DEFAULT 'pendente',
  PRIMARY KEY (id),
  CONSTRAINT fk_tarefas_solicitante
    FOREIGN KEY (fk_usuario_solicitante) REFERENCES usuarios(id),
  CONSTRAINT fk_tarefas_designado
    FOREIGN KEY (fk_usuario_designado) REFERENCES usuarios(id),
  CONSTRAINT fk_tarefas_radar
    FOREIGN KEY (fk_radar) REFERENCES radares(id),
  CHECK (status IN ('pendente', 'em_andamento', 'concluida', 'cancelada'))
);

CREATE TABLE parametros (
  fk_componente INT NOT NULL,
  fk_radar INT NOT NULL,
  valor_maximo FLOAT NOT NULL,
  valor_minimo FLOAT NOT NULL,
  PRIMARY KEY (fk_componente, fk_radar),
  CONSTRAINT fk_parametros_componente
    FOREIGN KEY (fk_componente) REFERENCES componentes(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_parametros_radar
    FOREIGN KEY (fk_radar) REFERENCES radares(id)
    ON DELETE CASCADE
);

CREATE TABLE endereco_empresa (
  fk_empresa INT NOT NULL,
  fk_endereco INT NOT NULL,
  numero VARCHAR(20) NOT NULL,
  complemento VARCHAR(100),
  PRIMARY KEY (fk_empresa, fk_endereco),
  CONSTRAINT fk_endereco_empresa_empresa
    FOREIGN KEY (fk_empresa) REFERENCES empresas(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_endereco_empresa_endereco
    FOREIGN KEY (fk_endereco) REFERENCES longradouros(cep)
);

CREATE TABLE endereco_radar (
  fk_radar INT NOT NULL,
  fk_endereco INT NOT NULL,
  km VARCHAR(45) NOT NULL,
  complemento VARCHAR(100),
  PRIMARY KEY (fk_radar, fk_endereco),
  CONSTRAINT fk_endereco_radar_radar
    FOREIGN KEY (fk_radar) REFERENCES radares(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_endereco_radar_endereco
    FOREIGN KEY (fk_endereco) REFERENCES longradouros(cep)
);

INSERT INTO empresas (razao_social, nome_fantasia, cnpj) 
VALUES ('Strong Eye', 'Strong Eye Tech', '12345678000199');

INSERT INTO cargos (nome) 
VALUES ('Gerente');

INSERT INTO cargos (nome) 
VALUES ('Técnico');

INSERT INTO codigo_ativacao (codigo_ativacao, fk_empresa, fk_cargo, ativo) 
VALUES ('A1B2C', 1, 1, 1);

use strong_eye;

SELECT 
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
ORDER BY u.nome ASC;

DROP TRIGGER update_codigo;

SELECT * FROM cargos;

use strong_eye;

select * from usuarios;
select * from codigo_ativacao;