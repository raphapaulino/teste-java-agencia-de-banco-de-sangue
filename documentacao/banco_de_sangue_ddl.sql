CREATE DATABASE IF NOT EXISTS banco_de_sangue
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE banco_de_sangue;

CREATE TABLE candidatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    rg VARCHAR(20),
    data_nasc DATE NOT NULL,
    sexo ENUM('Masculino', 'Feminino') NOT NULL,
    mae VARCHAR(100),
    pai VARCHAR(100),
    email VARCHAR(100),
    cep VARCHAR(9),
    endereco VARCHAR(150),
    numero INT,
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    estado CHAR(2),
    telefone_fixo VARCHAR(20),
    celular VARCHAR(20),
    altura DECIMAL(4,2),
    peso DECIMAL(5,2),
    tipo_sanguineo ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
);