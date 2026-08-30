-- DROP DATABASE IF EXISTS strong_eye; 
CREATE DATABASE strong_eye;

USE strong_eye;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50) NOT NULL UNIQUE,
	cnpj CHAR(14) NOT NULL UNIQUE
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	senha CHAR(64) NOT NULL,
    cargo VARCHAR(20) NOT NULL,
	fk_empresa INT NOT NULL,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

create table endereco (
	id INT PRIMARY KEY AUTO_INCREMENT,
    cep char(8) NOT NULL UNIQUE
);

create table radar (
	id INT PRIMARY KEY AUTO_INCREMENT,
    mac CHAR(12) NOT NULL UNIQUE,
    modelo VARCHAR(50) NOT NULL,
    complemento_endereco VARCHAR(20) NOT NULL,
    fk_endereco INT NOT NULL,
	fk_empresa INT NOT NULL,
	FOREIGN KEY (fk_endereco) REFERENCES endereco(id),
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

create table componente (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dado_capturado TEXT NOT NULL
);

create table metrica (
	id INT PRIMARY KEY AUTO_INCREMENT,
    metrica INT NOT NULL,
    fk_componente INT NOT NULL,
    fk_radar INT NOT NULL,
    FOREIGN KEY (fk_componente) REFERENCES componente(id),
    FOREIGN KEY (fk_radar) REFERENCES radar(id)
);

