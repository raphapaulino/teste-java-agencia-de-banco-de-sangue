CREATE DATABASE IF NOT EXISTS banco_de_sangue
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE banco_de_sangue;

CREATE TABLE `candidatos` (
  `id`INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `altura` double NOT NULL,
  `data_nasc` date NOT NULL,
  `numero` int NOT NULL,
  `peso` double NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `celular` varchar(255) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `mae` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `pai` varchar(255) NOT NULL,
  `rg` varchar(255) NOT NULL,
  `sexo` varchar(255) NOT NULL,
  `telefone_fixo` varchar(255) NOT NULL,
  `tipo_sanguineo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
