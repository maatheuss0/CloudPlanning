CREATE DATABASE CloudPlanning;
GO

USE CloudPlanning;
GO


Create table usuario(
	idUsuario INT PRIMARY KEY IDENTITY,
	email VARCHAR(50) NOT NULL UNIQUE,
	senha VARCHAR(20) NOT NULL
)
GO


Create table usuarioComum(
	idUsuarioComum INT PRIMARY KEY IDENTITY,
	idUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario),
	idEmpresa INT FOREIGN KEY REFERENCES empresa(IdEmpresa),
	nome VARCHAR (70),
	CPF VARCHAR (12) NOT NULL UNIQUE,
	DataNascimento DATE NOT NULL,
)
GO


Create table empresa(
	idEmpresa INT PRIMARY KEY IDENTITY,
	idUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario),
	CNPJ VARCHAR(14) UNIQUE ,
	nomeFantasia VARCHAR(70),
	telefone VARCHAR(14) UNIQUE
);
GO


Create table diagrama(
	idDiagrama INT PRIMARY KEY IDENTITY,
	idEmpresa INT FOREIGN KEY REFERENCES empresa(idEmpresa),
	idComponentes INT FOREIGN KEY REFERENCES componentes(idComponentes),
	nome VARCHAR(70)
);
GO


Create table Componentes(
	idComponentes INT PRIMARY KEY IDENTITY,
	nome VARCHAR(50),
	codigo VARCHAR(300),  
	imagemComponente VARCHAR(70), 
	descricao VARCHAR(100)
);
GO
