const mysql = require("mysql2");

// Configurações de conexão
const connection = mysql.createConnection({
  host: "149.62.37.1",
  user: "u201631368_lucas",
  password: "3ntr0niC#1529",
  database: "u201631368_solicitocoleta",
});

// Inserindo dados em uma tabela
const userData = {
  nome: "José Wellington Lima de Sousa",
  endereco: "Rua XXVII, 334",
  telefone: 8582107221,
  cpf: "12345678900",
  solicitacao: "Mais um teste de conexão com o banco de dados remoto",
};

const sql =
  "INSERT INTO solicitocoleta (nome, endereco, telefone, cpf, solicitacao) VALUES (?, ?, ?, ?, ?)";

connection.query(
  sql,
  [
    userData.nome,
    userData.endereco,
    userData.telefone,
    userData.cpf,
    userData.solicitacao,
  ],
  (err, result) => {
    if (err) {
      console.error("Erro ao inserir dados:", err);
    } else {
      console.log(
        "Dados inseridos com sucesso! ID do novo registro:",
        result.insertId
      );
    }
    connection.end();
  }
);
