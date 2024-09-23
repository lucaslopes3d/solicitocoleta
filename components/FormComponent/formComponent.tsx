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
        textAlignVertical="top"
      />
      <ButtonComponent
        title="enviar"
        onPush={() => handleAfterClickSendButtonCleanForm}
      />
    </S.StyledView>
  );
};
