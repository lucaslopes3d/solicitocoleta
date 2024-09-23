import React, { ReactElement, useState } from "react";
import { View } from "react-native";
import * as S from "./styles";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { TextInputTypes } from "./types";

export const FormComponent: React.FC = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enedereco, setEndereco] = useState("");
  const [solicitacao, setSolicitacao] = useState("");

  const handleSetNome = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNome(event.target.value);
  const handleSetCpf = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCpf(event.target.value);
  const handleSetTelefone = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTelefone(event.target.value);
  const handleSetEndereco = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEndereco(event.target.value);
  const handleSetSolicitacao = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSolicitacao(event.target.value);

  //Limpar os campos digitados
  const handleAfterClickSendButtonCleanForm = () => {
    setNome("");
    setCpf("");
    setTelefone("");
    setEndereco("");
    setSolicitacao("");
  };

  const handleSubmitCompleteForm = () => {
    const completeForm: TextInputTypes = {
      nomeCompleto: nome,
      cpfCompleto: cpf,
      telefoneCompleto: telefone,
      enderecoCompleto: enedereco,
      solicitacaoCompleta: solicitacao,
    };

    //   const mysql = require("mysql2");

    //   const connection = mysql.createConnection({
    //     host: "149.62.37.1",
    //     user: "u201631368_lucas",
    //     password: "3ntr0niC#1529",
    //     database: "u201631368_solicitocoleta",
    //   });

    //   const clientData = {
    //     nome: completeForm.nomeCompleto,
    //     cpf: completeForm.cpfCompleto,
    //     telefone: completeForm.telefoneCompleto,
    //     endereco: completeForm.enderecoCompleto,
    //     solicitacao: completeForm.solicitacaoCompleta,
    //   };

    //   const sql =
    //     "INSERT INTO solicitocoleta (nome, cpf, telefone, endereco, solicitacao) VALUES (?, ?, ?, ?, ?)";

    //   connection.query(
    //     sql,
    //     [
    //       clientData.nome,
    //       clientData.cpf,
    //       clientData.telefone,
    //       clientData.endereco,
    //       clientData.solicitacao,
    //     ],

    //     (err: any, result: any) => {
    //       if (err) {
    //         console.error("Erro ao inserir dados:", err);
    //       } else {
    //         handleAfterClickSendButtonCleanForm();
    //         console.log(
    //           "Dados inseridos com sucesso! ID do novo registro:",
    //           result.insertId
    //         );
    //       }
    //       connection.end();
    //     }
    //   );
  };

  return (
    <S.StyledView>
      <S.StyledTexts>Nome completo:</S.StyledTexts>
      <S.StyledTextInput onChange={() => handleSetNome} />
      <S.StyledTexts>CPF:</S.StyledTexts>
      <S.StyledTextInput onChange={() => handleSetCpf} />
      <S.StyledTexts>Telefone:</S.StyledTexts>
      <S.StyledTextInput onChange={() => handleSetTelefone} />
      <S.StyledTexts>Endereço da coleta:</S.StyledTexts>
      <S.StyledTextInput onChange={() => handleSetEndereco} />
      <S.StyledTexts>Solicitação:</S.StyledTexts>
      <S.StyledTextInput
        onChange={() => handleSetSolicitacao}
        multiline
        numberOfLines={10}
      />
      <ButtonComponent title="enviar" onPush={() => handleSubmitCompleteForm} />
    </S.StyledView>
  );
};
